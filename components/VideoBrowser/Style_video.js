import styled from 'styled-components';
import React from 'react';


export const Ui_image = styled.img`
    cursor: pointer;
    width:220px;
    height:140px;
`
export const Container = styled.div`
    flex-wrap:wrap;
`
export const Field = styled.div`
    display:flex;
    flex-direction:column;
    border-top:0.1px solid #D7D9D9;
    border-bottom:0.1px solid #D7D9D9;
    border-left:0.1px solid #D7D9D9;
    border-right:0.1px solid #D7D9D9;
    height:65px;
    width:1240px;
    padding:5px;
    margin-left:90px;
    input{
        border-top:0.1px solid #D7D9D9;
        border-bottom:0.1px solid #D7D9D9;
        border-left:0.1px solid #D7D9D9;
        border-right:0.1px solid #D7D9D9;
        width:1210px;
        height:33px;
        margin-left:10px;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
    }
    label{
        margin-left:10px;
        color:black;
        font-weight:550;
        font-size:14px;
    }
`
export const Iframe = styled.iframe`
    margin-top:15px;
    width:766px;
    height:431px;
`
export const Segment = styled.div`
    border-top:0.1px solid #C3C4C4;
    border-bottom:0.1px solid #C3C4C4;
    border-left:0.1px solid #C3C4C4;
    border-right:0.1px solid #C3C4C4;
    box-shadow:0 5px 25px rgba(0,0,0,.1);
    width:766px;
    height:100px;
`
export const Embed = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:90px;
`
export const ImageItems = styled.div`
    display:flex;
    align-items:center;
    width:370px;
    margin-top:15px;
    border-top:0.1px solid #C3C4C4;
    margin-left:90px;
    p{
        font-size:15px;
        font-weight:550;
    }
`
export const Content = styled.div`
    display:flex;
`
export const Icon = styled.img`
    width:30px;
    height:35px;
`
