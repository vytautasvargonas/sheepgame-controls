import React from 'react';
import styled from 'styled-components';
import NerisBlack from '../../fonts/NerisBlack.otf';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 3vh;
  margin-top: 10px;
  margin-bottom: -2vh;
`;

const Text = styled.span`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-size: 7vh;
/*   font-weight: 100; */
  font-weight: bold;
  margin-top: 0px;
  color:${props => props.textColor};
`;

function Typography(props) {
  return (
    <Wrapper>
      <Icon src={props.icon} alt="resourceIcon" ></Icon>
      <Text {...props}></Text>
    </Wrapper>
  );
}

export default Typography;
