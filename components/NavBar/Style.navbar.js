import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
    width:300px;
` 
export const Body = styled.body`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:20vh;
    background:#fff;
    flex-wrap:wrap;
    margin-bottom:60px;
    
    nav{
        position:relative;
        background: #fff;
        list-style: none;
        padding: 10px;
        width:100%;
        background: #fff;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
        transition: transform 0.5s;
        height:100px;
    
    &:hover{
        transform:scale(1.1);
        z-index:100;
        background: #CDDDDB;
        box-shadow: 0 5px 25px rgba(0,0,0,.2);
        color:#fff;
    }
    }
    a{
        text-decoration:none;
        color:black;
        font-weight:500;
    }
    span{
        width: 20px;
        height:20px;
        text-align:center;
        line-height:20px;
        background:#25bcff;
        color:#fff;
        display:inline-block;
        border-radius:50%;
        margin-right:10px;
        font-size:12px;
        font-weight:600;
    }
    li{
        list-style: none;
        padding: 10px;
        width:100%;
        background:#DBE9E7;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
        transition: transform 0.5s;
    
    &:hover{
        transform:scale(1.1);
        z-index:100;
        background: #A3B9B6;
        box-shadow: 0 5px 25px rgba(0,0,0,.2);
        color:#fff;
    }
    }
    
`
export const Title = styled.div`
    
    background:#376963;
    padding:10px 20px;
    font-size:20px;
    font-weight:700;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    width:290px;
    height:60px;
    h2{
        color:#fff;
        margin-top:15px;
        margin-left:65px;
        
        
    }
`

