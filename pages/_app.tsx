import Layout from "../components/NavBar/Layout";
import {Container} from '../styles/style-__app';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Layout/>
        <Component {...pageProps} />
    </Container>
    
  );
}

export default MyApp
