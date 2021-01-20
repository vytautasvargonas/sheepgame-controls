import ReactTooltip from 'react-tooltip';
import React from 'react';
import styled from 'styled-components';
import NerisBlack from '../fonts/NerisBlack.otf';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const SheepdomTooltip = ({ color }) => {
  return (
    <ReactTooltip
      id="item_info"
      type="warning"
      effect="solid"
      globalEventOff="mousedown"
      textColor="#FF4F8BFF"
      backgroundColor="#000"
      getContent={(dataTip) => `${dataTip}`}
    />
    /*.customeTheme {
      @font-face {
        font-family: NerisBlack;
        src: url(${NerisBlack});
      }
      color: #ff6e00 !important;
      background-color: orange !important;
      &.place-top {
      &:after {
      border-top-color: orange !important;
      border-top-style: solid !important;
      border-top-width: 6px !important;
      font-size: '1.2rem';
      font-weight: bold;
      font-family: NerisBlack;
      }*/
  );
};

export default SheepdomTooltip;
