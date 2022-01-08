import styled from 'styled-components';

export const Body = styled.body`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    flex-wrap:wrap;
    margin-bottom:30px;
    nav{
        background-color: #fff;
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
    
    li{
        list-style: none;
        padding: 10px;
        width:250px;
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
    width:250px;
    height:60px;
    h2{
        color:#fff;
        margin-top:15px;
        margin-left:65px;
    }
`
