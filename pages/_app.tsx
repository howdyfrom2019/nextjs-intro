import {AppProps} from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";

const App = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </Layout>
  );
}
export default App;