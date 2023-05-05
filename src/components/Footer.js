import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Border from './Border';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
			<Border container="true">
      	<Row style={{width: "100%"}}>
	        <Col md="4" className="footer-copywright">
						<Border>
		          <h3>
		            Template by Soumyajit Behera
		            <br /> implemented by Enrico Bonato
		          </h3>
						</Border>
	        </Col>
	        <Col md="4" className="footer-copywright">
						<Border>
			        <h3 style={{width:"100%"}}>Copyright © {year} EB</h3>
						</Border>
	        </Col>
	        <Col md="4" className="footer-body">
	          <ul className="footer-icons">
							<Border>
		            <li className="social-icons">
		              <a
		                href="https://github.com/EnricoBonato-web"
		                style={{ color: 'white' }}
		                target="_blank"
		                rel="noopener noreferrer"
		              >
		                <AiFillGithub />
		              </a>
		            </li>
							</Border>
							<Border>
		            <li className="social-icons">
		              <a
		                href="https://www.linkedin.com/in/enrico-bonato-685b7615b"
		                style={{ color: 'white' }}
		                target="_blank"
		                rel="noopener noreferrer"
		              >
		                <FaLinkedinIn />
		              </a>
		            </li>
							</Border>
							<Border>
		            <li className="social-icons">
		              <a
		                href="https://www.instagram.com/booonnyy/"
		                style={{ color: 'white' }}
		                target="_blank"
		                rel="noopener noreferrer"
		              >
		                <AiFillInstagram />
		              </a>
		            </li>
							</Border>
	          </ul>
	        </Col>
				</Row>
			</Border>
    </Container>
  );
}

export default Footer;
