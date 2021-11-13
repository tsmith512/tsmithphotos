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
        {props.intro && (<Subhead>{props.intro}</Subhead>)}
      </Banner>

      {props.children}

      <PhotoSwipeInitializer />
    </main>
  );
}
