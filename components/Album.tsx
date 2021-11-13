import React from 'react';
import Head from 'next/head';

import { ReactElement } from 'react';

import {
  Banner,
  Date,
  PhotoSwipeInitializer,
  Subhead
} from './index';

interface AlbumProps {
  children?: any,
  title: string,
  date?: string, // @TODO: For now.
  intro?: string,
  subhead?: string,
  image: string,
}

export const Album: React.FC<AlbumProps> = (props): ReactElement => {

  return (
    <main>
      <Head>
        <title>{props.title} | Taylor Smith</title>
      </Head>

      <Banner filename={props.image}>
        <h1>{props.title}</h1>
        {props.date && (<Date>{props.date}</Date>)}
        {props.subhead && (<Subhead>{props.subhead}</Subhead>)}
        {props.intro && (<p>{props.intro}</p>)}
      </Banner>

      {props.children}

      <PhotoSwipeInitializer />
    </main>
  );
}
