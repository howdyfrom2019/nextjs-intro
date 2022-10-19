import {AppProps} from "next/app";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import Layout from "../components/Layout";

const App = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </Layout>
  );
}
export default App;