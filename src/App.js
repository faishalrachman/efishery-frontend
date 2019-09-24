import React from 'react';
import PokeList from "./components/PokeList/PokeList"
// import PokeDetail from "./components/PokeDetail/PokeDetail"
import PokeDetail from "./components/PokeDetail/PokeDetail"
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

class App extends React.Component{
  
  render(){
  return (
    <div >
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" style={{color:'white',fontSize:'20px'}}>Simple Pokémon Pokédex </a>
  </nav>
      <body className="App-body text-center">
        <Container fluid>
          <Row>
            <Col xs md lg="12">
        <Router>
          <Route exact path="/" component={PokeList}/>
          <Route exact path="/detail/:id" component={PokeDetail}/>
          <ScrollMemory />
        </Router>
        </Col>
        </Row>
        </Container>
      </body>
    </div>
  )
  }
}
export default App;

