import React from "react";
import App from '../components/VideoBrowser/App';
import {Container} from '../styles/style-video'
import Layout from '../components/NavBar/Layout';
const VideoBrowser=()=>{

    return(
        <>
        <Layout/>
        <Container>
            <App/>
        </Container>
        </>
    )
}
export default VideoBrowser;



