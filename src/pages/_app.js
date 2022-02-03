import Head from 'next/head';
import { wrapper } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'css/tailwind.css';

const App = ({ Component, pageProps }) => (
  <div className="font-sans">
    <Head>
      <title>Pay with Crypto - Bitpay</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ToastContainer position="top-center" limit="1" />
    <Component {...pageProps} />
  </div>
);

export default wrapper.withRedux(App);
