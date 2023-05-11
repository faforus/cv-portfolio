import { Html, Head, Main, NextScript } from "next/document";
import img from "../../public/icon.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <title>Filip Wielechowski</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
