import React from 'react';
import styled from 'styled-components';
import BubbleText from './BubbleText';
import BubbleIcon from './BubbleIcon';

const BubbleButton = styled.button`
  height: 15vh;
  width: 15vh;
  background-color: ${props => (props.bckgColor ? props.bckgColor : '#0f0')};
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  top: 0vh;
  border: none;
  padding: 0;
  &:active {
    filter: brightness(50%);
  }
  ${props => (props.rightHalf ? 'margin-left: -7.5vh;' : '')}
  ${props => (props.leftHalf ? 'margin-right: -7.5vh;' : '')}
`;

function BigBubble({ onClick, ...props }) {
  return (
    <BubbleButton {...props} onClick={onClick}>
      <BubbleIcon {...props} />
      <BubbleText {...props} top></BubbleText>
    </BubbleButton>
  );
}

export function BackBubble({ onClick, ...props }) {
  return (
    <BubbleButton {...props} onClick={onClick}>
      <BubbleText {...props} small>
        back
      </BubbleText>
    </BubbleButton>
  );
}

export default BigBubble;
