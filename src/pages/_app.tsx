import Layout from "@/component/Layout";
import "@/styles/globals.css";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
};

export default App;
