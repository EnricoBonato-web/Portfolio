import React from "react";
import { Container } from "react-bootstrap";
import { GetRepoData } from "./GetRepoData";
import Border from "../Border";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Border text="Main Title">
          <h1 className="project-heading" style={{ margin: "auto" }}>
            My Recent <strong className="purple">Works </strong>
          </h1>
        </Border>
        <Border text="sub title" style={{ margin: "8px" }}>
          <p
            style={{ color: "white", margin: "auto"  }}
          >{`Here are a few projects I've worked on recently.`}</p>
        </Border>
        <GetRepoData
          showStars={true}
          numOfrepos={10}
          userName={"EnricoBonato-web"}
          showLanguage={false}
        />
      </Container>
    </Container>
  );
}
export default Projects;
