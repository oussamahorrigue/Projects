import React from "react";
import styled from "styled-components";

export const Pokemon = styled.div`
  width: 22%;
  margin: 20px;
  display: inline-block;
  height: 30rem;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 15px;
`;
export const Container = styled.div`
  display: flex;
  max-width: 550px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  p {
    margin: 0px;
    padding: 10px;
  }
`;

export const PokemonName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
`;
export const BoxImage = styled.div`
  padding: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Pokemon__meta = styled.div`
  text-align: center;
  font-weight: bold;
`;
export const BoxName = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;
`;
export const PokemonImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const PokemonTypeSpan = styled.span`
  width: 45%;
  background-color: #f16820;
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
`;
export const PokemonType = styled.div`
  display: flex;

  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-around;
  margin-top: 5px;
`;
