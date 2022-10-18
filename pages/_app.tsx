import {AppProps} from "next/app";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App= ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </>
  );
}
export default App;