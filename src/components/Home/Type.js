import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web developer",
					"Frontend entusiast",
					"inquisitive person"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
				width:'100%'
      }}
    />
  );
}

export default Type;
