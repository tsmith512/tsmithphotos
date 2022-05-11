export interface imageProps {
  original: string;
  filename: string;
  directory: string;
  fullSrc: string;
  socialSrc: string;
  width: number;
  height: number;
  srcSet: string;
}

// This needs to match what's in batch-resize.js
export const imageSizes = [200, 400, 600, 800, 1200, 1600];

export const processedImage = (original: string): imageProps => {
  const [album, image] = original.split('/');
  const [file, ext] = image.split('.');

  // This needs to match what's in batch-resize.js
  const directory = album.replace(/[^A-Z0-9]/g, '');

  // @TODO: This is a dumb way for this to work
  const metadata: any = require('../public/_photos/metadata.json');
  const thisMeta: any = metadata[directory][file];

  return {
    original,
    filename: image,
    directory,
    width: thisMeta.width,
    height: thisMeta.height,
    fullSrc: `/_photos/${directory}/${file}.${ext}`,
    socialSrc: `/_photos/${directory}/${file}-800.${ext}`,
    srcSet: makeSrcSet(directory, file, ext),
  };
};

export const makeSrcSet = (dir: string, file: string, ext: string): string => {
  return imageSizes
    .reduce(
      (srcSet: string, size: number) =>
        `${srcSet}, ` + encodeURI(`/_photos/${dir}/${file}-${size}.${ext}`) + ` ${size}w`,
      ''
    )
    .trim()
    .replace(/^, /, '');
};
