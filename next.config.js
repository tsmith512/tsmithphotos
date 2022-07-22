/** @type {import('next').NextConfig} */

const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withOptimizedImages, {
    handleImages: ['jpeg', 'png', 'svg'],
    responsive: {
      adapter: require('responsive-loader/sharp'),
    }
  }],
],{
  optimizeFonts: false,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
});
