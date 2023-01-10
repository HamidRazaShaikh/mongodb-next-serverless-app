import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
// import ErrorBoundary from '../components/errorBoundry';
import { GlobalProvider} from "../context/globalState";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </GlobalProvider>
  );
}
