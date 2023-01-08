import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import ErrorBoundary from '../components/errorBoundry';

export default function App({ Component, pageProps }) {
  return ( <Layout><ErrorBoundary><Component {...pageProps} /></ErrorBoundary></Layout>)
  
 
}
