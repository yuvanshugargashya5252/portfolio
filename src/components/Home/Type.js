import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "full stack web developer",
          "Mobile App Developer",
          "Data Engineer",
          "Cloud Engineer",
          "Frontend Developer",
          "Backend developer"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
