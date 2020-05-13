import React from "react";
import styled from "styled-components";
import fullAudioImage from "../../images/menu/controler_audio_icon_FullAudio.png";
import fxOnlyImage from "../../images/menu/controler_audio_icon_NoMusic.png";
import mutedImage from "../../images/menu/controler_audio_icon_NoAudio.png";

/*const AudioButton = styled(FlexColumn)`
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background: url(${(props) => props.preBckgImage});
  background-color: ${(props) =>
    props.playerColor ? props.playerColor : "#42e7de"};
  background-repeat: no-repeat;
  background-size: cover;
     opacity: 50%; 
`;

import { useStateValue } from '../../store/StateContext'; // && "transform: rotate(180deg)"};*/

const ImageStyle = styled.button`
  height: 14vh;
  width:
  border: 0px;
  border-radius: 100%;
  padding: 0;
  &:active {
    filter: brightness(50%);
  }
  box-shadow: none;
  max-height: 40px;
  max-width: 100%;
  align-items: left;
  ${(props) => props.left};
  &:active {
    filter: brightness(50%);
  }
  :focus {
    outline: 0;
  }
  margin-top: 1vh;
  margin-left: 1vh;
`;
const AudioIcon = styled.img`
  margin-top: 0%;
  height: 100%;
  width: 100%;
`;

function GetImage(props) {
  if (props.firstOwner)
    switch (props.audioState) {
      case 0:
        return fullAudioImage;
      case 1:
        return fxOnlyImage;
      case 2:
        return mutedImage;
      default:
        return mutedImage;
    }
  else return mutedImage;
}
function OnClickAudio() {
  var data = { element: "audio-button", value: true };
  console.log(data);
  window.airconsole.message(window.airconsole.SCREEN, data);
}
export function AudioButton(props) {
  /*   const [, dispatch] = useStateValue(); */
  return (
    <ImageStyle onClick={() => OnClickAudio(props)} {...props}>
      <AudioIcon src={GetImage(props)} alt="audioImage"></AudioIcon>
    </ImageStyle>
  );
}

export default AudioButton;
