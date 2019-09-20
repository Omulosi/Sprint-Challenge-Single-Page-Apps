import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

import axios from 'axios';
import styled from 'styled-components';


const StyledList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  div {
    margin: 1em;
  }
`

const fetchAPI = 'https://rickandmortyapi.com/api/character/';
//const fetchAPI = 'https://rick-api.herokuapp.com/api/';

export default function CharacterList() {
  const [characterList, setCharactersList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(fetchAPI)
      .then(response => {
        setCharactersList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const handleSubmit = (query) => {
    const characters = characterList.filter(c => c.name.toLowerCase().includes(query));
    setSearchResult(characters);
  }

  const characters = searchResult.length === 0? characterList: searchResult;

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}/>
      <StyledList >
        {characters.map(character => {
          return <CharacterCard character={character} key={character.id}/>;
        })}
      </StyledList>
  </div>
  );
}
