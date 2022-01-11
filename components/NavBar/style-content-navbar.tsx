import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    position:relative;
    margin:15px;
    height:210px;
    width:200px;
    justify-content:center;
    background-color:#fff;
    nav{
        width:240px;
        height:100px;
        position:absolute;
        bottom:20px;
        list-style:none;
        padding: 10px;
        background: #fff;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
        transition: transform 0.5s;
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
        font-size:20px;
        position:absolute;
        left:95px;
    }
    
    li{
        
        position:relative;
        width:250px;
        height:30px;
        padding: 10px;
        list-style: none;
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
    span{
        position:absolute;
        top:35px;
        width:25px;
        height:25px;
        text-align:center;
        line-height:20px;
        background:black;
        color:#fff;
        display:inline-block;
        border-radius:50%;
        
        font-size:12px;
        font-weight:600;
        transform:translateY(-20px);
    }

`
export const Title=styled.div`
    background:#376963;
    padding:10px 20px;
    font-size:20px;
    font-weight:700;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    position:absolute;
    top:15px;
`