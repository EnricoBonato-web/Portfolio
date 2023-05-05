import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Home2 from './Home2';
import Type from './Type';
import Border from '../Border';

function Home() {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
							<Border text="Main Title">
              <h1 className="heading-name">
							{`I'M`}
                <strong className="main-name"> Enrico Bonato</strong>
              </h1>

							</Border>
							<Border style={{margin: '10px'}} text="typewriter" >
              <div style={{ padding: 40, textAlign: 'left', width:'100%' }}>
                <Type />
              </div>
							</Border>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
							<Border>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
							</Border>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </div>
  );
}

export default Home;
