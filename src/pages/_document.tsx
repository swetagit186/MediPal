import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps} from '@mui/material-nextjs/v13-pagesRouter';
import { JSX } from "react";

export default function MyDocument(props: JSX.IntrinsicAttributes & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head >
        <DocumentHeadTags {...props}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
