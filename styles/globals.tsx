import Styled from 'styled-components';


export const Body = Styled.body`
  width:100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background: url('/background.jpg');
  overflow: hidden;
  background-size:cover;
  &:hover{
    transform: scale(1.15);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
  }
`

export const Card = Styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
`
export const CardImage = Styled.div`
  grid-area: image;
  background: url("img1.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  `

export const CardText=Styled.div`
  grid-area: stats; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(255, 7, 110);
`

export const CardStats = Styled.div`
  grid-area:stats;
`
export const Date = Styled.span`
color: rgb(255, 7, 110);
font-size:13px;
`
export const P = Styled.p`
  color: grey;
  font-size:15px;
  font-weight: 300;
`
export const H2 = Styled.h2`
   margin-top:0px;
  font-size:28px;
`
export const Stats = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px;
`