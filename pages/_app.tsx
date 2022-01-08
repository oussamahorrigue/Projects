import Layout from "../components/NavBar/Layout";
import {Container} from '../components/NavBar/Style-navbar'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Layout/>
        <Component {...pageProps} />
    </Container>
    
  );
}

export default MyApp
