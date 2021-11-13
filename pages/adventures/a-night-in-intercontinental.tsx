import type { NextPage } from 'next';

import {
  Album, Gallery, Photo, Story
} from '../../components';

// A Night in Intercontinental
// December, 2014

const Page: NextPage = () => {
  return (
    <Album
      title="A Night in Intercontinental"
      date="December, 2014"
      image="2014-8926.jpg"
      intro="Generally teeming with travelers from all over the world, this is one of the busiest places I find myself on a regular basis. But I was surprised: even this airport slows down late at night. Without the passengers, IAH becomes an abandoned but clean, luminous expanse of curious architecture, repetitive furniture, and hauntingly wide spaces.">

      <Photo filename="2014-8946.jpg" />

      <Gallery row filenames={['2014-9009.jpg', '2014-8927.jpg', '2014-8976.jpg']} />

      <Gallery row filenames={['2014-8920.jpg', '2014-8973.jpg']} />

      <Gallery row filenames={['2014-8984.jpg', '2014-9094.jpg', '2014-8990.jpg']} />

      <Photo filename="2014-9132.jpg" />

      <Gallery filenames={['2014-9024.jpg', '2014-9001.jpg', '2014-9070.jpg', '2014-9113.jpg']} />

      <Story filename="2014-9148.jpg" copy="right">

        <p>
          I walked about twelve miles between 9pm and 3am. As got tired, I
          happened upon a group of other stranded travelers in the B South
          Concourse. I joined in the card games and we talked about our
          adventures. Two sisters from Mexico traveling home from a mission
          trip in Tel Aviv, a newlywed Canadian couple headed to South America,
          and a violin-playing Californian exchange student en route from France.
        </p>

        <p>
          Then we watched the sunrise together, and flew off in different directions.
        </p>

      </Story>

      <Photo filename="2014-9152.jpg" />

    </Album>

  );
}

export default Page;
