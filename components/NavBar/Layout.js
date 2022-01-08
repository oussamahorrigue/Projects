import React from "react";
import Link from "next/link";
import {Body,Title} from './Style-navbar';

const Layout = () =>{

    return(
        <Body>
            <div>
                <Title><h2>My Projects</h2></Title>
                <nav>
                    <li><span>1</span><Link href='/'><a>SpaceX</a></Link></li>
                    <li><span>2</span><Link href='/wikipedia'><a>Wikipedia</a></Link></li>
                    <li><span>3</span><Link href='/videoBrowser'><a>Video Browser</a></Link></li>         
                </nav>
            </div>
        </Body>
        
    );
}
export default Layout;




