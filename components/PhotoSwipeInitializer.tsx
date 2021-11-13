
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';
import { useEffect, VoidFunctionComponent } from 'react';

export const PhotoSwipeInitializer: VoidFunctionComponent = (): null => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: 'div[data-pswp-container]',
      children: 'a',
      pswpModule: PhotoSwipe,
    });
    lightbox.init();
  }, []);

  return null;
};
