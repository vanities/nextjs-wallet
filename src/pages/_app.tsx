import { StrictMode } from "react";
import type { AppProps } from "next/app";

import { wrapper } from "state";
import Web3Provider from "components/Web3Provider";

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </StrictMode>
  );
}

export default wrapper.withRedux(App);
