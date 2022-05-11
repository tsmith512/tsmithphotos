// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import { useEffect, VoidFunctionComponent } from 'react';

export const PhotoSwipeInitializer: VoidFunctionComponent = (): null => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: 'div[data-pswp-container]',
      children: 'a',
      // @ts-ignore
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  }, []);

  return null;
};
