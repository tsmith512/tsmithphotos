/** @type {import('next').NextConfig} */

const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['photoswipe']);

module.exports = withPlugins([
  [withOptimizedImages, {
    handleImages: ['jpeg', 'png', 'svg'],
    responsive: {
      adapter: require('responsive-loader/sharp'),
    }
  }],
  [withTM],
],{
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
});
