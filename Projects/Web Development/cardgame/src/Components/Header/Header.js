import { useContext } from "react";
import GameContext from "../../store/game-context";

import classes from "../../Styles/styles/Header.module.css";
const Header = (props) => {
  const ctx = useContext(GameContext);
  const moves = Math.floor(ctx.totalMoves / 2);

  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>OurGame</h2>
      <p className={classes.total}>Moves : {moves}</p>
    </div>
  );
};
export default Header;
