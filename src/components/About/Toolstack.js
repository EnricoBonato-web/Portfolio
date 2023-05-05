import React from "react";
import { Col, Row } from "react-bootstrap";
import Border from '../Border';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiQt,
  SiGit,
	SiApple,
	SiGitlab
} from "react-icons/si";
const icons=[  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiQt,
  SiGit,
	SiApple,
	SiGitlab];

function Toolstack() {
  return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
	    {icons.map(icon=>{
				return <Col xs={4} md={2} className="tech-icons">
				  <Border>	
				    {React.createElement(icon, { style: { height: '100px', margin: '10px' },className: 'card-img' })}
				  </Border>			    
				</Col>
					})
				}
	    </Row>
	  );
	}

export default Toolstack;
