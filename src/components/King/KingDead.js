import React from "react";

import { useStateValue } from "../../store/StateContext";
import styled from "styled-components";
import * as kingItems from "../../images/king_items";

const Position = styled.div`
  align-items: center;
  margin-top: 7vh;
`;

const CrownImg = styled.img`
  position: absolute;
  margin-left: 6vh;
  margin-top: 14vh;
  width: 150px;
  transform: rotate(90deg);
`;

const StaffImg = styled.img`
  position: absolute;
  margin-top: 14vh;
  margin-left: -20vh;
  width: 150px;
  transform: rotate(-90deg);
`;

const KingDead = () => {
  const [{ menu }] = useStateValue();
  return (
    <Position>
      <CrownImg src={kingItems[menu.hatSpriteName]}></CrownImg>
      <StaffImg src={kingItems[menu.scepterSpriteName]}></StaffImg>
    </Position>
  );
};

export default KingDead;