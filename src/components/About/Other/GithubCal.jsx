import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function GithubCal() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level0: '#F0F0F0',
    level1: '#5D8CAE',
    level2: '#48929B',
    level3: '#006C7F',
    level4: '#264348'
  };
  return (
    <Row style={{ justifyContent: "center"}}>
      <GitHubCalendar
        username="Adrianchin"
        blockSize={15}
        blockMargin={5}
        blockRadius={5}
        theme={colourTheme}
        fontSize={15}
      />
    </Row>
  );
}

export default GithubCal;