import React from 'react';
import {getRandomPercent,getRandomNumber} from './helper/random';

const Border = ({ children, style, text, container}) => {
	Border.defaultProps = {
	  container: false
	};
  return (
    <div className="wireframe" style={style}>
		{ 
			text == null ? (
	   <svg className="wirecontainer">
				<line x1={getRandomNumber(-5,5)} y1={getRandomPercent(95,105)} x2={getRandomPercent(95,105)} y2={getRandomNumber(-5,5)} />
				<line x1={getRandomNumber(-5,5)} y1={getRandomNumber(-5,5)} x2={getRandomPercent(95,105)} y2={getRandomPercent(95,105)} />
				</svg>
			) : (
				<div className="wiretext">{text}</div>
			)
		}
		<span className={container==='true'? 'text-delay-container' : 'text-delay'}>
      {children}
		</span>
    </div>
  );
};

export default Border;