import React from "react";
import styled from "styled-components";
import {
  Red,
  DarkRed,
  Blue,
  DarkBlue,
  Beige,
  DarkBeige,
  White,
  Grey,
  DarkGrey
} from "../../../colors";

const InternalUseGameBoard = styled.section`
  display: flex;
  flex-wrap: wrap;
  .game-card {
    height: 8rem;
    width: calc(100% / 5 - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #efefef;
    border-radius: 0.25rem;
    margin: 0.625rem;
    box-sizing: border-box;
    color: ${White};
    cursor: pointer;
    font-weight: 500;
  }
  .player {
    background: transparent;
  }
  .player.clicked.red {
    background: ${Red};
  }
  .player.clicked.blue {
    background: ${Blue};
  }
  .player.clicked.beige {
    background: ${Beige};
    color: ${DarkGrey};
  }
  .player.clicked.black {
    background: ${DarkGrey};
  }
  .spymaster.clicked.red {
    background: ${Red};
    color: ${White};
  }
  .spymaster.clicked.blue {
    background: ${Blue};
    color: ${White};
  }
  .spymaster.clicked.beige {
    background: ${Beige};
    color: ${DarkGrey};
  }
  .spymaster.clicked.black {
    background: ${DarkGrey};
  }
  .spymaster.red {
    color: ${Red};
  }
  .spymaster.blue {
    color: ${Blue};
  }
  .spymaster.beige {
    color: ${Beige};
  }
  .spymaster.black {
    background: ${Grey};
  }
  .player.red.inactive {
    background: ${DarkRed};
  }
  .player.blue.inactive {
    background: ${DarkBlue};
  }
  .player.beige.inactive {
    background: ${DarkBeige};
    color: ${DarkGrey};
  }
  .spymaster.red.clicked.inactive {
    background: ${DarkRed};
    color: ${White};
  }
  .spymaster.blue.inactive {
    color: ${Red};
  }
  .spymaster.blue.clicked.inactive {
    background: ${DarkBlue};
    color: ${White};
  }
  .spymaster.blue.inactive {
    color: ${Blue};
  }
  .spymaster.beige.clicked.inactive {
    background: ${DarkBeige};
    color: ${DarkGrey};
  }
  .spymaster.beige.inactive {
    color: ${Beige};
  }
  .spymaster {
    cursor: not-allowed;
  }
`;

const GameBoard = ({ cards, playerView, currentGameIsActive, clicked }) => {
  let getPlayerView = playerView ? "player" : "spymaster";
  let getGameStatus = currentGameIsActive ? "active" : "inactive";
  return (
    <InternalUseGameBoard>
      {cards.map(x => {
        const getCardColor = x.color;
        const getCardClickedStatus = x.clicked ? "clicked" : "";
        return (
          <div
            key={x.id}
            className={`game-card ${getPlayerView} ${getCardColor} ${getCardClickedStatus} ${getGameStatus}`}
            onClick={
              currentGameIsActive && playerView && !x.clicked
                ? () => clicked(x)
                : null
            }
          >
            {x.word}
          </div>
        );
      })}
    </InternalUseGameBoard>
  );
};

export default GameBoard;
