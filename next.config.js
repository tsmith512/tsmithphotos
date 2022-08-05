/** @type {import('next').NextConfig} */

const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const withNextBundleAnalyzer = require('@next/bundle-analyzer')({
  clientOnly: true,
  enabled: true,
});

module.exports = withPlugins([
  [withOptimizedImages, {
    handleImages: ['jpeg', 'png', 'svg'],
    responsive: {
      adapter: require('responsive-loader/sharp'),
    }
  }],
  withNextBundleAnalyzer,
],{
  optimizeFonts: false,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
});
