/**
 * @file batch-resize.js
 *
 * Next's built in <Image> component didn't give me what I wanted, and the
 * next-optimized-images workflow was awesome except that with this volume of
 * large images and variants, it kept crashing as it passed 24GB memory usage.
 * This is a simple script that pulls in the images directory and pounds out all
 * the needed output sizes in a single script with Sharp.
 */

const fs = require('fs');
const process = require('process');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');

const dir = process.cwd();
const inputBatch = path.join(dir, 'photos', '**', '*.jpg');
const outputPath = path.join(dir, 'public/_photos');
const metadataFile = path.join(dir, 'public/_photos', 'metadata.json');
const jpegOptions = {
  mozjpeg: true,
  quality: 90,
  force: true,
}

const metadata = {};

const run = async () => {
  for (file of glob.sync(inputBatch)) {
    const filename = path.parse(file);
    const directory = filename.dir.split('/').pop().replace(/[^A-Z0-9]/g, '');
    const { name, ext } = filename;

    fs.mkdirSync(path.join(outputPath, directory), { recursive: true });

    const original = sharp(file).rotate().jpeg(jpegOptions);

    // @TODO: This is kinda dumb because this giant index is going to be read
    // for each image load...
    await original.metadata().then(({width, height}) => {
      if (!metadata.hasOwnProperty(directory)) {
        metadata[directory] = {};
      }
      metadata[directory][name] = {
        ext,
        width,
        height,
      };
    });

    if (fs.existsSync(path.join(outputPath, directory, `${name}${ext}`))) {
      console.log(`Found ${directory}/${filename.base}`);
      continue;
    }

    console.log(`Resizing ${directory}/${filename.base}`);
    await Promise.all([
      original.clone().toFile(path.join(outputPath, directory, `${name}${ext}`)),
      original.clone().resize(1600).toFile(path.join(outputPath, directory, `${name}-1600${ext}`)),
      original.clone().resize(1200).toFile(path.join(outputPath, directory, `${name}-1200${ext}`)),
      original.clone().resize(800).toFile(path.join(outputPath, directory, `${name}-800${ext}`)),
      original.clone().resize(600).toFile(path.join(outputPath, directory, `${name}-600${ext}`)),
      original.clone().resize(400).toFile(path.join(outputPath, directory, `${name}-400${ext}`)),
      original.clone().resize(400).toFile(path.join(outputPath, directory, `${name}-200${ext}`)),
    ]);
  };
};


// For faster dev builds, if the metadata JSON exists, bail out. I'm sure this
// won't confuse the heck out of me in the future...
if (!fs.existsSync(metadataFile)) {
  run()
    .then(() => {
      fs.writeFileSync(metadataFile, JSON.stringify(metadata));
    })
    .catch(e => { console.log(e) });
}
