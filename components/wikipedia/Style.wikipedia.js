import styled from 'styled-components'

export const Container = styled.div`
    flex-wrap:wrap;
    margin-left:0px;
    height:100px;
    margin-left:50px;
    width:1400px;
`
export const SearchBar = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:0px;
    input{
        border-top:0.1px solid #AFBDBB;
        border-bottom:0.1px solid #AFBDBB;
        border-left:0.1px solid #AFBDBB;
        border-right:0.1px solid #AFBDBB;
        width:100%;
        height:35px;
        border-radius: 5px;
        box-shadow:0 5px 25px rgba(0,0,0,.1);
    }
    label{
        color:#45514F;
        font-size:17px;
        font-weight:540;
    }
`
export const Items = styled.div`
    display:flex;
    position:relative;
    border-top:0.1px solid #AFBDBB;
    margin-top:15px;
    height:30px;
    
    a{
        text-decoration:none;
        color:#595F5E;
        margin-left:20px;
        font-size:17px;
    }
    
    
`
export const AncorContainor = styled.div`
    position:absolute;
    right:0;
    top:5px;
    background-color:#DBDCDC;
    width:60px;
    height:30px;
    border-radius: 8px;
    &:hover{
        background-color:#CBCECD;
        box-shadow: 0 5px 25px rgba(0,0,0,.2);
    }
    
`
export const Title = styled.div`
    font-weight:550;
    font-size:15px;
    color:#45514F
;
`
