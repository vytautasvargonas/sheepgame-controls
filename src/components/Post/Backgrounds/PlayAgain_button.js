import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const PlayAgainButton = ({ color }) => {
  return (
    <SvgImage viewBox="0 0 1470 347">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4" data-name="Layer 4">
          <path
            fill={color}
            d="M0,0v347c0,0,165.2-61,278.1-112.6s432-199.3,718.2-216.9s231.1-0.2,342.2-8.9S1470,0,1470,0L0,0z"
          />
        </g>
      </g>
    </SvgImage>
  );
};

export default PlayAgainButton;
