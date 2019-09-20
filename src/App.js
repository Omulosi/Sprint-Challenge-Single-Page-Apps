import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';


import Header from "./components/Header.js";
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


const fetchAPI = 'https://rick-api.herokuapp.com/api/';

export default function App() {

  const [characters, setCharacters] = useState([]);


  return (
    <main>
      <Header />
      <div className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">CharacterList</Link></li>
        </ul>
        <SearchForm />
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
