import React from 'react';
import PokeList from "./components/PokeList/PokeList"
// import PokeDetail from "./components/PokeDetail/PokeDetail"
import PokeDetail from "./components/PokeDetail/PokeDetail"
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory'

class App extends React.Component{
  
  render(){
  return (

    <div className="App">
      <header className="App-header">
        <h1>Simple Pokémon Pokédex</h1>
      </header>
      <body className="App-body">
        <Router>
          <Route exact path="/" component={PokeList}/>
          <Route exact path="/detail/:id" component={PokeDetail}/>
          <ScrollMemory />
        </Router>
      </body>
    </div>
  )
  }
}
export default App;

