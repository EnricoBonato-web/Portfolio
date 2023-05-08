import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Border from '../Border';
import {
  AiFillGithub,
 // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
						<Border text="Another Big Title">
	            <h1 style={{ fontSize: "2.6em" }}>
	              LET ME <span className="purple"> INTRODUCE </span> MYSELF
	            </h1>
						</Border>
						<Border text="Another Big Title">
	            <p className="home-about-body">
	              I have always loved brain teaser and math so i fell in love with programming 
	              <br />
	              <br />I am fluent in classics like
	              <i>
	                <b className="purple"> C++, Java and HTML/CSS. </b>
	              </i>
	              <br />
	              <br />
	              `My field of Interest's are developing 
	              with `<b className="purple">Node.js</b> and
	              <i>
	                <b className="purple">
	                  {" "}
	                  Modern Javascript Library and Frameworks
	                </b>
	              </i>
	              &nbsp; like
	              <i>
	                <b className="purple"> React.js and Vue.js</b>
	              </i>
	            </p>
						</Border>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>						
							<Border>
              	<img src={myImg} style={{margin:"auto"}} className="img-fluid" alt="avatar" />
							</Border>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
						<Border text="find me if you can">
           		<h1 style={{width:"100%"}}>FIND ME ON</h1>
						</Border>
						<Border text="hi friends">
            <p style={{width:"100%"}}>
              Feel free to <span className="purple">connect </span>with me
            </p>
						</Border>
            <ul className="home-about-social-links">			
							<Border>
	              <li className="social-icons">
	                <a
	                  href="https://github.com/EnricoBonato-web"
	                  rel="noreferrer"
	                  className="icon-colour  home-social-icons"
	                >
	                  <AiFillGithub />
	                </a>
	              </li>			
							</Border>			
							<Border>
	              <li className="social-icons">
	                <a
	                  href="https://www.linkedin.com/in/enrico-bonato-685b7615b"
	                  rel="noreferrer"
	                  className="icon-colour  home-social-icons"
	                >
	                  <FaLinkedinIn />
	                </a>
	              </li>			
							</Border>			
							<Border>
	              <li className="social-icons">
	                <a
	                  href="https://www.instagram.com/booonnyy/"
	                  rel="noreferrer"
	                  className="icon-colour home-social-icons"
	                >
	                  <AiFillInstagram />
	                </a>
	              </li>			
							</Border>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
