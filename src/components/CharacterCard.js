import React from "react";
import styled from 'styled-components';

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
  const { character } = props;
  return (
    <StyledDiv>
      <figure>
        <img src={character.image} alt="rick sanchez"/>
        <figcaption>
          <p>{`${character.name} from ${character.location.name}`}</p>
          <p>{`${character.species}; ${character.gender}; ${character.status}`}</p>
          <p>{`Episodes: ${character.episode.length}`}</p>
        </figcaption>
      </figure>
    </StyledDiv>
  );
}
