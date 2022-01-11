import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    
`
export const SearchBar = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    label{
        position:absolute;
        bottom:0;
        color:#45514F;
        font-size:17px;
        font-weight:540;
    }
    input{
        position:absolute;
        top:0;
        min-width:1000px;
        weight:auto;
        height:35px;
        border-top:0.1px solid #AFBDBB;
        border-bottom:0.1px solid #AFBDBB;
        border-left:0.1px solid #AFBDBB;
        border-right:0.1px solid #AFBDBB;
        border-radius: 5px;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
    }
    
`
export const Rendered = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:70px;
`
export const Item = styled.div`
    display:flex;
    position:relative;
    border-top:0.1px solid #AFBDBB;
    height:110px;
` 
export const Go = styled.div`
    display:flex;
    position:absolute;
    right:0;
    top:10px;
    background-color:#DBDCDC;
    width:60px;
    height:30px;
    border-radius: 8px;
    &:hover{
        background-color:#CBCECD;
        box-shadow: 0 5px 25px rgba(0,0,0,.2);
    }
    a{
        text-decoration:none;
        font-size:17px;
        color:#595F5E;
        padding:5px 20px;
    }
`
export const Content= styled.div`
    display:flex;
    flex-direction:column;
    p{
        font-weight:550;
        font-size:15px;
        color:#45514F;
        
    }
    span{
        
    }
    
`

