import React from 'react';
import { Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import {  Row } from 'react-bootstrap';
//https://github.com/KaleidosCodeTeam/SWEDesigner-source
function DisplaySortedRepoData({ repoData, numOfrepos, showStars, showLanguage }) {
  const text = (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <Col lg={4} md={6} sm={6}className="project-card" key={0}>
            <ProjectCards
              key={0}
              title={"SWEDesigner-source"}
              description={"Website that allows users to draw UML diagrams and get the Java and Javascript source code."}
              link={"https://github.com/KaleidosCodeTeam/SWEDesigner-source"}
              imgPath={"Nodejs"}
            ></ProjectCards>
          </Col>
      {repoData.sort((a,b)=>a.id<b.id?1:-1).map(repo => {
					{if(repo.description!==null){
	         return <Col lg={4} md={6} sm={6} className="project-card" key={repo.id}>
	            <ProjectCards
	              key={repo.id}
	              title={repo.name}
	              description={repo.description}
	              link={repo.html_url}
	              imgPath={repo.language}
	            ></ProjectCards>
	          </Col>
				}}
      })}
    </Row>
  );

  return text;
}
export default DisplaySortedRepoData;
