import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import MainAppBar from '../components/MainAppBar'
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../components/Theme';
import { useReducer } from "react";
import { initialState, reducer } from "../hooks/useReducer";
export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>DogHub</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <MainAppBar state={state} dispatch={dispatch} />
        <CssBaseline />
        <Component {...pageProps} state={state} dispatch={dispatch} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};