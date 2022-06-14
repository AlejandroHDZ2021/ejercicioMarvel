import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import "../index.css"

import FavoriteContext from "./contexts/favoritesContext";

const { useContext } = React;

const Menu = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    return (
      <div >
          <Navbar className="bg-light justify-content-between" id='cabeza' bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Marvel</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/favorite">Favoritos</Nav.Link>
          <div>&#10084;&#65039; {favoritePokemons.length}</div>
          </Nav>
          </Navbar.Collapse>
         </Container>
        </Navbar>
      </div>
    )
  }
  
  export default  Menu