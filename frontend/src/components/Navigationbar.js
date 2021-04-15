import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import "../styles/Navigationbar.css"

function Navigationbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-color" dark expand="md">
        <NavbarBrand href="/">
          TranslateNews
          <i class="fas fa-home"></i>
        </NavbarBrand>  
        <NavbarToggler onClick={toggle} />  
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">News</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><i class="fas fa-language"></i></NavbarText>
          <NavbarText><i class="fas fa-newspaper"></i></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;