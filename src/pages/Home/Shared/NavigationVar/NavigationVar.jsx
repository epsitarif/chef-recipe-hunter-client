import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../../providers/AuthProvider';

const NavigationVar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">SAVARIAN CHEF</Navbar.Brand> */}
          <Button variant="warning">Savar's Chefs</Button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to="/">Home</Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Demos</Nav.Link>
              <Nav.Link href="#pricing">Recipes</Nav.Link>
            </Nav>
            <Nav>
              {
              user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
              }
              
                { user ?
                    <Button onClick={logOut} variant="secondary">Logout</Button> :
                    <Link to="/login">
                    <Button variant="info">Login</Button>
                    </Link>
                    }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationVar;