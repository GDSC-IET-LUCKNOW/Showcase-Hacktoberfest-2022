import { useContext, useState, useEffect } from "react";
import GameContext from "../../store/game-context";
import classes from "../../Styles/styles/Option.module.scss";
const Options = () => {
  const [solutionToggled, setSolutionToggled] = useState(false);
  const ctx = useContext(GameContext);

  useEffect(() => {
    setSolutionToggled(ctx.toggleSolution);
  }, [ctx.toggleSolution]);

  const newGameHandler = () => {
    ctx.gameChanged();
  };
  const toggleSolutionHandler = () => {
    ctx.toggle();
  };
  return (
    <div className={classes.option}>
      <div>
        <button
          className={classes["option__new-game"]}
          onClick={newGameHandler}
        >
          New Game
        </button>
      </div>
      <div>
        <button
          className={classes["option__solution"]}
          onClick={toggleSolutionHandler}
        >
          {solutionToggled ? "Hide Solution" : "Show Solution"}
        </button>
      </div>
    </div>
  );
};
export default Options;
