import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import Border from "../Border";
import {
  DiJavascript1 as javascript,
  DiReact as react,
  DiNodejs as nodejs,
} from "react-icons/di";
import {
  SiNextdotjs as node,
  SiCss3 as css,
  SiTypescript as typescript,
  SiPhp as php,
  SiHtml5 as html,
  SiVuedotjs as vue,
} from "react-icons/si";
import { DiJava as java } from "react-icons/di";

function ProjectCards(props) {
  const icons = {
    typescript,
    php,
    javascript,
    react,
    nodejs,
    node,
    css,
    html,
    java,
    vue,
  };
  let img = props.imgPath.toLocaleLowerCase();
  const immagine = React.createElement(
    icons.hasOwnProperty(img) ? icons[img] : icons["js"],
    {
      style: { height: "80px", margin: "10px" },
      className: "card-img",
    }
  );
  return (
    <Border text={"Project"} container="true">
      <Card className="project-card-view">
        <Border style={{ height: "100px", margin: "10px", wordBreak: "break-word" }}>{immagine}</Border>
        <Card.Body>
          <Border text={"title"} style={{ height: "fit-content" }}>
            <Card.Title>{props.title}</Card.Title>
          </Border>
          <Border text={"description"}>
            <Card.Text style={{ textAlign: "justify" , wordBreak: "break-word"}}>
              {props.description}
            </Card.Text>
          </Border>
          <Border style={{ margin: "auto", height: "fit-content"  }} >
            <Button variant="primary" href={props.link} target="_blank">
              <BiLinkExternal /> &nbsp;
              {props.isBlog ? "View Blog" : "View Project"}
            </Button>
          </Border>
        </Card.Body>
      </Card>
    </Border>
  );
}
export default ProjectCards;
