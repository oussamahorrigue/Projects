import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  box-sizing: border-box;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  p {
    margin: 0px;
    padding: 10px;
  }
`;

export const Pokemon = styled.div`
  display: inline-block;
  height: 33rem;
  width: 25rem;
  width: 25rem;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  margin-bottom: 20px;
`;
export const PokemonName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: blue;
  letter-spacing: 4px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
`;
export const Pokemon_Image = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Pokemon__meta = styled.div`
  text-align: center;
  font-weight: bold;
`;
