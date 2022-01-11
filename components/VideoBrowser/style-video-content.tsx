import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
`
export const Grid = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const UI_embed = styled.div`
    display:flex;
    margin:20px;
    flex-direction:column;
    align-items:center;
    iframe{
        
        width:766px;
        height:431px;
    }
`
export const Header = styled.div`
    display:flex;
    flex-direction:column;
    border-top:0.1px solid #C3C4C4;
    border-bottom:0.1px solid #C3C4C4;
    border-left:0.1px solid #C3C4C4;
    border-right:0.1px solid #C3C4C4;
    box-shadow:0 5px 25px rgba(0,0,0,.1);
    margin-top:20px;
    h4{
        display:flex;
        padding:10px ;
        line-height:0px;
    }
    p{
        line-height:0px;
        display:flex;
        padding:10px ;
    }
`
export const Search = styled.div`
    display:flex;
    border-top:0.1px solid #D7D9D9;
    border-bottom:0.1px solid #D7D9D9;
    border-left:0.1px solid #D7D9D9;
    border-right:0.1px solid #D7D9D9;
    height:85px;
    margin-bottom:40px;
`
export const Inputstyle = styled.div`
    padding:10px;
    
    label{
        color:black;
        font-weight:550;
        font-size:14px;
    }
    input{
        border-top:0.1px solid #D7D9D9;
        border-bottom:0.1px solid #D7D9D9;
        border-left:0.1px solid #D7D9D9;
        border-right:0.0px solid #D7D9D9;
        width:1210px;
        height:33px;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
        
    }
`
export const SerachImage = styled.div`
    display:flex;
    img{
        display:flex;
        border-top:0.1px solid #D7D9D9;
        border-bottom:0.1px solid #D7D9D9;
        border-left:0.0px solid #D7D9D9;
        border-right:0.1px solid #D7D9D9;
    }
` 
export const Image = styled.img`
    cursor: pointer;
`
export const Items = styled.div`
    display:flex;
    margin:15px;
`
export const Content = styled.div`
    display:flex;
    align-items:center;
    margin-left:15px;
`