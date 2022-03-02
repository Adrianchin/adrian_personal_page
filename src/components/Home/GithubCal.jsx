import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function GithubCal() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level0: '#F0F0F0',
    level1: '#C4EDDE',
    level2: '#7AC7C4',
    level3: '#F73859',
    level4: '#384259'
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