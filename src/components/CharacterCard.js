import React from "react";
import styled from 'styled-components';
import fun from './fun.jpg';


const StyledDiv = styled.div`
  padding 0.5em;
  width: 250px;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,.27);
  margin: 0;
  
  figure {
    margin: 0;
    padding: 0;
    img {
      width: 100%;
      border-radius: 4px;
    }

    figcaption {
      p {
        color: #555;
        font-size: 0.9em;
        font-style: italic;
        font-weight: lighter;
        padding: 0.3em;
        margin: 0.2em;
      }

      p + p {
      border-top: 1px solid rgb(0,0,0, 0.2);
      }
    }
  }
`
export default function CharacterCard(props) {
  return (
    <StyledDiv>
      <figure>
        <img src={fun} alt="rick sanchez"/>
        <figcaption>
          <p>Rick Sanchez from Earth</p>
          <p>Human; Male; Alive</p>
        </figcaption>
      </figure>
      <figure>
        <img src={fun} alt="rick sanchez"/>
        <figcaption>
          <p>Rick Sanchez from Earth</p>
          <p>Human; Male; Alive</p>
        </figcaption>
      </figure>
      <figure>
        <img src={fun} alt="rick sanchez"/>
        <figcaption>
          <p>Rick Sanchez from Earth</p>
          <p>Human; Male; Alive</p>
        </figcaption>
      </figure>
      <figure>
        <img src={fun} alt="rick sanchez"/>
        <figcaption>
          <p>Rick Sanchez from Earth</p>
          <p>Human; Male; Alive</p>
        </figcaption>
      </figure>
    </StyledDiv>
  );
}
