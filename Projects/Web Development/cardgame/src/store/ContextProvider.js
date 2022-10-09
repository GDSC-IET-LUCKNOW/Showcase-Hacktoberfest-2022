import { useReducer } from "react";
import { RandomId } from "../pureJS/RandomId";
import GameContext from "./game-context";
//import { gameData } from "../pureJS/gameData";

const defaultGameState = {
  newGame: false,
  randomId: RandomId(),
  totalMoves: 0,
  toggleSolution: false,
};

const gameReducer = (state, action) => {
  if (action.type === "TOGGLE_ACTION") {
    console.log("solution toggled", state.toggleSolution);
    if (state.toggleSolution) return { ...state, toggleSolution: false };
    else return { ...state, toggleSolution: true };
  }

  if (action.type === "CHANGE_GAME") {
    const ran = RandomId();
    //console.log("game changes", ran);

    return { ...state, newGame: true, randomId: ran, totalMoves: 0 };
  }

  if (action.type === "NEW_MOVE") {
    const move = state.totalMoves + 1;
    return { ...state, totalMoves: move };
  }
};

const GameProvider = (props) => {
  const [gameState, dispatchAction] = useReducer(gameReducer, defaultGameState);

  const movesHandler = () => {
    // console.log("new move");
    dispatchAction({ type: "NEW_MOVE" });
  };

  const changeGame = () => {
    dispatchAction({ type: "CHANGE_GAME" });
  };

  const toggleHandler = () => {
    dispatchAction({ type: "TOGGLE_ACTION" });
  };

  const gameContext = {
    newGame: gameState.newGame,
    randomId: gameState.randomId,
    movesFunction: movesHandler,
    totalMoves: gameState.totalMoves,
    toggleSolution: gameState.toggleSolution,
    gameChanged: changeGame,
    toggle: toggleHandler,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};
export default GameProvider;
