import React from "react";
//import Randomid from "../pureJS.randomId";
const GameContext = React.createContext({
  newGame: false,
  gameChanged: () => {},
  randomId: [],
  movesFunction: () => {},
  totalMoves: 0,
  toggleSolution: false,
  toggle: () => {},
});

export default GameContext;
