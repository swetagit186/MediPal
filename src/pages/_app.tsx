import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@mui/material/styles';

import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
          <Component {...pageProps} />
    </ThemeProvider>
  
  );
}
