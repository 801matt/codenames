import React from "react";
import styled from "styled-components";
import Button from "../../Shared/Buttons";

const InternalUseGameOptions = styled.section`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GameOptions = ({ gameViewClicked, newGameClicked }) => {
  return (
    <InternalUseGameOptions>
      <Button clicked={gameViewClicked} text="Spymaster View" />
      <Button clicked={newGameClicked} text="New Game" />
    </InternalUseGameOptions>
  );
};

export default GameOptions;
