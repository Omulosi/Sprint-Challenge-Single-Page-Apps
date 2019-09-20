import React from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {

  return (
    <main>
      <Header />
      <div className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
        </ul>
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
