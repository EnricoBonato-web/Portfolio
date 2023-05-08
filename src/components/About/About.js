import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Border from '../Border';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px",}} >
          	<Border text="Main Title">
						  <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
	              Know Who <strong className="purple">{`I'M`}</strong>
	            </h1>
						</Border>				
						<Border>
            	<Aboutcard />
						</Border>			
          </Col>
					<Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
				<Border>
	          <img src={laptopImg} alt="about" className="img-fluid" />
				</Border>
	        </Col>
        </Row>
		<Border text="Main Title">
        <h1 className="project-heading" style={{width:"100%"}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
		</Border>

        <Techstack />
<Border text="Main Title">
        <h1 className="project-heading" style={{width:"100%"}}>
          <strong className="purple">Tools</strong> I use
        </h1>
		</Border>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
