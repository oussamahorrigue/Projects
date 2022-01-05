import Styled from 'styled-components';


export const Body = Styled.body`
display:flex;
justify-content:center;
align-items:center;
min-height:20vh;
background:#f6f6f6;
`

export const Box = Styled.div`
    width:300px;
`

export const H2 = Styled.h2`
    color:#fff;
    background:#03a9f4;
    padding:10px 20px;
    font-size:20px;
    font-weight:700;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const Ul = Styled.ul`
    position:relative;
    background: #fff;
    list-style: none;
    padding: 10px;
    width:100%;
    background: #fff;
    box-shadow:0 5px 25px rgba(0,0,0,.1);
    transition: transform 0.5s;
    
    &:hover{
        transform:scale(1.1);
        z-index:100;
        background: #25bcff;
        box-shadow: 0 5px 25px rgba(0,0,0,.2);
        color:#fff;
    }
`
export const Li = Styled.li`
    list-style: none;
    padding: 10px;
    width:100%;
    background: #fff;
    box-shadow:0 5px 25px rgba(0,0,0,.1);
    transition: transform 0.5s;
    
    &:hover{
        transform:scale(1.1);
        z-index:100;
        background: #25bcff;
        box-shadow: 0 5px 25px rgba(0,0,0,.2);
        color:#fff;
    }
`

export const Span = Styled.span`
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
`


