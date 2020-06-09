import React, { useState, useEffect } from "react";
import styled from "styled-components";
import wordList from "../../word-list";
import GameHeading from "./GameHeading";
import GameBoard from "./GameBoard";
import GameOptions from "./GameOptions";

const InternalUseGame = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`;

const TEAM_ONE = "red";
const TEAM_TWO = "blue";
const CITIZEN = "citizen";
const ASSASSIN = "assassin";
const RED = "red";
const BLUE = "blue";
const BEIGE = "beige";
const BLACK = "black";

const createCardDeck = () => {
  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const cardDeck = [];

  const shuffledWords = shuffle(wordList);

  for (let i = 0; i <= 24; i++) {
    cardDeck.push({
      id: i,
      word: shuffledWords[i].toUpperCase(),
      clicked: false
    });
  }

  cardDeck.forEach(card => {
    if (card.id < 9) {
      card.color = RED;
      card.value = TEAM_ONE;
    } else if (card.id < 17) {
      card.color = BLUE;
      card.value = TEAM_TWO;
    } else if (card.id < 24) {
      card.color = BEIGE;
      card.value = CITIZEN;
    } else {
      card.color = BLACK;
      card.value = ASSASSIN;
    }
  });

  const shuffledCardDeck = shuffle(cardDeck);

  return shuffledCardDeck;
};

const Game = () => {
  const [teamOneScore, setTeamOneScore] = useState(9);
  const [teamTwoScore, setTeamTwoScore] = useState(8);
  const [currentTeam, setCurrentTeam] = useState(TEAM_ONE);
  const [playerView, setPlayerView] = useState(true);
  const [cards, setCards] = useState([]);
  const [currentGameIsActive, setCurrentGameIsActive] = useState(true);

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    (teamOneScore < 1 && endGame()) || (teamTwoScore < 1 && endGame());
  }, [teamOneScore, teamTwoScore]);

  const startNewGame = () => {
    const newCardDeck = createCardDeck();
    setTeamOneScore(9);
    setTeamTwoScore(8);
    setCurrentTeam(TEAM_ONE);
    setPlayerView(true);
    setCurrentGameIsActive(true);
    setCards(newCardDeck);
  };

  // END CURRENT GAME
  const endGame = () => {
    setCurrentGameIsActive(false);
  };

  // END CURRENT TEAM'S TURN
  const endTurn = () => {
    currentTeam === TEAM_ONE
      ? setCurrentTeam(TEAM_TWO)
      : setCurrentTeam(TEAM_ONE);
  };

  // SUBTRACT ONE FROM TEAM'S SCORE
  const subtractFromScore = card => {
    card.value === TEAM_ONE
      ? setTeamOneScore(prevState => prevState - 1)
      : setTeamTwoScore(prevState => prevState - 1);
  };

  // SET CARD'S CLICKED STATUS TO TRUE
  const updateCardClickedStatus = card => {
    const updateCards = [...cards];
    const index = updateCards.findIndex(x => x.id === card.id);
    updateCards[index].clicked = true;
    setCards(updateCards);
  };

  // CLICK HANLDER FOR CLICKING CARDS
  const handleCardClick = card => {
    updateCardClickedStatus(card);
    if (card.value === ASSASSIN) {
      endGame();
    } else if (card.value === CITIZEN) {
      endTurn();
    } else if (card.value === currentTeam) {
      subtractFromScore(card);
    } else if (card.value !== currentTeam) {
      subtractFromScore(card);
      endTurn();
    }
  };

  const gameViewHandler = () => {
    playerView ? setPlayerView(false) : setPlayerView(true);
  };

  const newGameHandler = () => {
    if (currentGameIsActive) {
      if (window.confirm("Are you sure you want to start a new game?")) {
        startNewGame();
      }
    } else {
      startNewGame();
    }
  };

  return (
    <InternalUseGame>
      <GameHeading
        teamOneScore={teamOneScore}
        teamTwoScore={teamTwoScore}
        currentTeam={currentTeam}
        endTurnHandler={endTurn}
      />
      <GameBoard
        cards={cards}
        playerView={playerView}
        currentGameIsActive={currentGameIsActive}
        clicked={card => handleCardClick(card)}
      />
      <GameOptions
        gameViewClicked={gameViewHandler}
        newGameClicked={newGameHandler}
      />
    </InternalUseGame>
  );
};

export default Game;
