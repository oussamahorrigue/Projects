import styled from 'styled-components';

export const Input = styled.input`
    width:1500px;
    height:30px;
    border-radius: 8px;
`
export const Container = styled.div`
    margin:0px;
    position:absolute;
    left:7px;
`
export const RenderedList = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    margin:10px;
    border-top-style: ridge;
    border-bottom-style: ridge;
    a{
        font-weight:100;
        font-size:20px;
        position:absolute;
        right:5px;
        text-decoration:none;
        background-color:#DCDCDC;
        color:#808080;
        height:20px;
        top:10px;
        border-radius: 30px;
    }
`
export const Title = styled.div`
    font-size:17px;
    font-weight:600;
    color:#463C54;
    
`
export const Label = styled.label`
    font-size:15px;
    font-weight:600;
`