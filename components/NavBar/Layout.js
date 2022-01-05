import React from "react";
import Link from "next/link";
import {Body,Box,H2,Ul,Li,Span} from './Component.style'



const Layout = () =>{

    return(
        <Body>
            <Box>
                <H2>My Projects</H2>
                <Ul>
                    <Li><Span>1</Span><Link href='/'>SpaceX</Link></Li>
                    <Li><Span>2</Span><Link href='/wikipedia'>Wikipedia</Link></Li>
                    <Li><Span>3</Span><Link href='/videoBrowser'>Video Browser</Link></Li>         
                </Ul>
            </Box>
        </Body>
    );
}
export default Layout;




