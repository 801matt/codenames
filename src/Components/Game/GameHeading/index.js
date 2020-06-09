import React from "react";
import Button from "../../Shared/Buttons";
import { Red, Blue } from "../../../colors";
import styled from "styled-components";

const InternalUseGameHeading = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  color: white;
  div {
    width: calc(100% / 3);
  }
  .game-heading__score {
    text-align: left;
    .game-heading__score--team-red {
      color: ${Red};
    }
    .game-heading__score--team-blue {
      color: ${Blue};
    }
  }
  .game-heading__turn {
    text-align: center;
  }
  .game-heading__end-turn {
    text-align: right;
  }
`;

const GameHeading = ({
  teamOneScore,
  teamTwoScore,
  currentTeam,
  endTurnHandler
}) => {
  return (
    <InternalUseGameHeading>
      <div className="game-heading__score">
        <span className="game-heading__score--team-red">{teamOneScore}</span>
        <span> - </span>
        <span className="game-heading__score--team-blue">{teamTwoScore}</span>
      </div>
      <div className="game-heading__turn">{currentTeam}'s turn</div>
      <div className="game-heading__end-turn">
        <Button clicked={endTurnHandler} text="End red's turn" />
      </div>
    </InternalUseGameHeading>
  );
};

export default GameHeading;
