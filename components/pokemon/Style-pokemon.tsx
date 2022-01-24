import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1100px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
export const Pokemon = styled.div`
  display: inline-block;
  width: 20%;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Pokemon__name = styled.div`
  text-align: center;
  padding: 10px;
  background: linear-gradient(#f0dee9, #5e5058);
  p {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const Pokemon__image = styled.div`
  padding: 2px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Pokemon_types = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 0px;
  justify-content: space-around;
  margin: 15px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const Span = styled.span`
  min-width: 50%;
  margin: 2px;
  background-color: ${(props) => {
    if (props.bg === "Grass") return "green";
    if (props.bg === "Poison") return "#181A47";
    if (props.bg === "Water") return "blue";
    if (props.bg === "Fire") return "red";
    if (props.bg === "Flying") return "yellow";
    if (props.bg === "Bug") return "#777";
    if (props.bg === "Normal") return "#40A497";
    if (props.bg === "Electric") return "#A47140";
    if (props.bg === "Ground") return "#294A13";
    if (props.bg === "Fairy") return "#745688";
    if (props.bg === "Fighting") return "#02AEF6";
    if (props.bg === "Psychic") return "#71F00E";
    if (props.bg === "Rock") return "#8D8D70";
    if (props.bg === "Steel") return "#010BFE";
    if (props.bg === "Ice") return "#B0B1D8";
    else return "black";
  }};
  border-radius: 3px;
  padding: 7px;
  font-weight: 700;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  margin-bottom: 10px;
  word-wrap: break-word;
  text-align: center;
  line-height: 15px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  height: 140px;
`;
