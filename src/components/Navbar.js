import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Border from './Border';
import logo from '../Assets/logotr.png';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

import { CgFileDocument } from 'react-icons/cg';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container >
		<Border style={{width:'100%'}} text="header" container="true">
       <div style={{ display:"flex", width:'100%', justifyContent: 'space-between'}}>
				<Navbar.Brand href="/" className="d-flex">
					<Border container="false">
					  <img
					    src={logo}
					    alt="EB"
					    className="img-fluid"
					    style={{ maxHeight: '45px' }}
					  />
					</Border>
        </Navbar.Brand>					
				<Border>
	        <Navbar.Toggle
	          aria-controls="responsive-navbar-nav"
	          onClick={() => {
	            updateExpanded(expand ? false : 'expanded');
	          }}
	        >
	          <span></span>
	          <span></span>
	          <span></span>
	        </Navbar.Toggle>
				</Border>
					</div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <Border text="link" container="true"><Border style={{margin:0, padding:0}}><AiOutlineHome style={{ marginBottom: '2px' }} /> </Border>Home</Border>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <Border text="link" container="true"><Border style={{margin:0, padding:0}}><AiOutlineUser style={{ marginBottom: '2px' }} /></Border> About</Border>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <Border text="link" container="true"><Border style={{margin:0, padding:0}}><AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> </Border>Projects</Border>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <Border text="link" container="true"><Border style={{margin:0, padding:0}}><CgFileDocument style={{ marginBottom: '2px' }} /> </Border>Resume</Border>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
			</Border >
      </Container>
    </Navbar>
  );
}

export default NavBar;
