import React from "react";
import Link from "next/link";
import {Container,Title} from './style-content-navbar'

const Layout = () =>{

    return(
        <Container>
            
                <Title>My Projects</Title>
                <nav>
                    <li><span>1</span><Link href='/'><a>SpaceX</a></Link></li>
                    <li><span>2</span><Link href='/wikipedia'><a>Wikipedia</a></Link></li>
                    <li><span>3</span><Link href='/videoBrowser'><a>Video Browser</a></Link></li>         
                </nav>
            
        </Container>
        
    );
}
export default Layout;




