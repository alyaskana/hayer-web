import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AuthProvider, ActionCableProvider, NewResponsesProvider } from "hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ActionCableProvider>
        <NewResponsesProvider>
          <Component {...pageProps} />
        </NewResponsesProvider>
      </ActionCableProvider>
    </AuthProvider>
  );
}

export default MyApp;
