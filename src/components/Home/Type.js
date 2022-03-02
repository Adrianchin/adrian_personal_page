import React from "react";
import ReactTypewriter from "react-typewriter-effect";

function Type() {
  return (
    <ReactTypewriter
    textStyle={{
        fontFamily: 'Red Hat Display',
        color: '#3F3D56',
        fontWeight: 1000,
        fontSize: '2em',
      }}
      startDelay={2000}
      cursorColor="#3F3D56"

      multiText={["I am a software developer", "This is my personal page"]}

      multiTextDelay={1000}
      typeSpeed={30}
    />
  );
}

export default Type;