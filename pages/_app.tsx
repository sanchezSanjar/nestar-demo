import type { AppProps } from "next/app";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {light} from "../scss/MaterialTheme"
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import { useState } from "react"; // @ts-ignore
import "../scss/app.scss";    // @ts-ignore
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";


export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

 // Socket.io, Redux, Mui, Apollo Client ...
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
