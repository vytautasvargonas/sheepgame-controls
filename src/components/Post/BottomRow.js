import React from "react";
import styled from "styled-components";

import CrownsTypography from "../../components/Menu/CrownsTypography";

import { useStateValue } from "../../store/StateContext";
import { ACHIEVEMENTS } from "./constants";
import SendAirConsole from "../AirConsoleHandler";
import NerisBlack from "../../fonts/NerisBlack.otf";
import PlayAgainButton from "../Post/PlayAgainButton";

const TypographyPosition = styled.div`
  position: absolute;
  bottom: 3vh;
  left: 5vw;
`;
const TabSpace = styled.span`
  margin-left: 20vw;
`;
const BottomRow = styled.div`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  z-index: 1;
  display: flex;
  justify-content: space-between;
  color: "white";
  height: 100%;
  width: 100%;
`;
const PlayAgainContainer = styled.button`
  position: absolute;
  padding: 0;
  background-color: #0000;
  border: #000;
  border-width: 0;
  opacity: 80%;
  overflow: hidden;
  :focus {
    outline: 0;
  }
  bottom: 0;
  right: 0;
`;
const Text = styled.span`
  position: absolute;
  bottom: 3vh;
  right: 5vw;
  color: "#FFFFFF";
  font-size: 1.2rem;
  font-weight: 1000;
  pointer-events: none;
`;
function OnClickPlay() {
  var data = { element: "playAgain", pressed: true };
  console.log("data send:", data);
  SendAirConsole(data);
}
export default () => {
  const [{ menu, post }] = useStateValue();

  var reward = "";
  if (post.selectedScore > 0) {
    if (post.scores.length > 0) {
      var score = post.scores[post.selectedScore - 1];
      reward = Math.floor((score.counter / score.rewardDelta) * score.reward);
    } else {
      reward = ACHIEVEMENTS[post.selectedScore].total;
    }
  } else {
    reward = post.totalScore;
  }

  return (
    <BottomRow>
      <PlayAgainContainer onClick={OnClickPlay}>
        <PlayAgainButton></PlayAgainButton>
        <Text style={{ marginTop: "5px" }}>
          {post.playAgain ? "waiting..." : "play again"}
        </Text>
      </PlayAgainContainer>
      <TypographyPosition>
        <CrownsTypography
          isYellow={true}
          text={menu.permanentCrownCount}
        ></CrownsTypography>
        <TabSpace></TabSpace>
        <CrownsTypography isYellow={false} text={reward}></CrownsTypography>
      </TypographyPosition>
    </BottomRow>
  );
};
