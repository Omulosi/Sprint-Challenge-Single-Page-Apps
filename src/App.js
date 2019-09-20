import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


import Header from "./components/Header.js";
import SearchForm from './components/SearchForm';


const fetchAPI = 'https://rick-api.herokuapp.com/api/';

export default function App() {

  const [characters, setCharacters] = useState([]);


  return (
    <main>
      <Header />
      <div className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
        </ul>
        <SearchForm />

      </div>
    </main>
  );
}
