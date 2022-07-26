import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />

      {/* This gross hack to make that onLoad work. See https://stackoverflow.com/questions/64121456/next-js-how-to-add-a-link-tag-inside-the-head-with-literal-onload-attribut */}
      <style dangerouslySetInnerHTML={{ __html: `
        </style>
        <link
          rel="preload"
          as="style"
          type="text/css"
          href="https://cloud.typography.com/6795652/6779432/css/fonts.css"
          onLoad="this.rel='stylesheet'"
        />
        <style>
      `}} />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
