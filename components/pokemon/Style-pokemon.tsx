import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 550px;
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
  width: 15%;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Pokemon__name = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;

  p {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const Pokemon__image = styled.div`
  padding: 20px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: 100%;
  }
`;
export const Pokemon_types = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 0px;
  justify-content: space-between;
  margin: 15px;
  span {
    width: 40%;
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
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
