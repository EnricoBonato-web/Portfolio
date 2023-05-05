import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import Border from '../Border';
import {
  DiJavascript1,
  DiNodejs,
	DiJava
} from "react-icons/di";
import {
	SiReact,
  SiVuedotjs,
  SiCss3,
  SiCsharp,
  SiHtml5,
	SiSass,
} from "react-icons/si";
const icons=[ SiReact,
  SiVuedotjs,
  SiCss3,
  SiCsharp,
  SiHtml5,
	SiSass,  
	DiJavascript1,
  DiNodejs,
	DiJava,
  CgCPlusPlus]
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {icons.map(icon=>{
			return <Col xs={4} md={2} className="tech-icons">
			  <Border>	
			    {React.createElement(icon, { style: { height: '100px', margin: '10px' }, className: 'card-img' })}
			  </Border>			    
			</Col>
				})
			}
    </Row>
  );
}

export default Techstack;
