

import Layout from "../components/NavBar/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout/>
        <Component {...pageProps} />
        </div>
    
  );
}

export default MyApp
