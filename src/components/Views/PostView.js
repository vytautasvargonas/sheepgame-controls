import React from "react";
import styled from "styled-components";

//import menu_view from "../../images/menu_view.jpg";
import { useStateValue } from "../../store/StateContext";
//import { ReadyCloud } from "../../components/Menu/Cloud";
import KingScreen from "../../components/Menu/King";
import MenuRow from "../../components/Menu/MenuRow";
import ItemName from "../../components/Menu/ItemName";
import EmptyRow from "../Layout/EmptyRow";
import FlexColumn from "../Layout/FlexColumn";
import FlexRow from "../Layout/FlexRow";
import Margined from "../Layout/Margined";
import victoryImg from "../../images/post/victoryr_background.png";
import PreBackground from "../../components/PreBackground";
import PlayAgainButton from "../Post/PlayAgainButton";
import BottomRow from "../Post/BottomRow";
import TalentSelection from "../Post/Achievements";

const FreeSpaceInsert = styled.div`
  height: 5vh;
  background-color: red;
  opacity: 30%;
`;

const PlayAgainButtonPosition = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0;
`;
const AchievementsPosition = styled.div`
  position: absolute;
  bottom: 30px;
`;

const NamePosition = styled.div`
  position: absolute;
  top: 45vh;
`;

function MenuView() {
  const [{ menu }] = useStateValue();
  const [
    {
      post: { win }
    }
  ] = useStateValue();
  return (
    <div>
      {/*       {<img src={menu_view} alt="menu_view"
        style={{ maxWidth: "100%", maxHeight: "100vh", position: "absolute", opacity: "50%" }}/>}
 */}
      <PreBackground {...menu} preBckgImage={victoryImg}>
        <FreeSpaceInsert>abc insert</FreeSpaceInsert>{" "}
        {
          //push elements down to start listing below center
        }
      </PreBackground>
      <NamePosition>
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={win ? "victory" : "defeat"}
              fontSize={55}
              height={7}
              playerColor={win ? "#f7931e" : "black"}
            ></ItemName>
            <ItemName
              nameValue={menu.playerName}
              fontSize={24}
              height={7}
              playerColor={win ? "#f7931e" : "black"}
            ></ItemName>
          </FlexColumn>
        </FlexRow>
      </NamePosition>
      <AchievementsPosition>
        <TalentSelection></TalentSelection>
      </AchievementsPosition>
      <PlayAgainButtonPosition>
        <PlayAgainButton></PlayAgainButton>
      </PlayAgainButtonPosition>
      <PlayAgainButtonPosition>
        <BottomRow></BottomRow>
      </PlayAgainButtonPosition>
    </div>
  );
}

export default MenuView;
