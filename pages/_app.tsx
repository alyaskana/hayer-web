import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AuthProvider, ActionCableProvider } from "@shared/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ActionCableProvider>
        <Component {...pageProps} />
      </ActionCableProvider>
    </AuthProvider>
  );
}

export default MyApp;
