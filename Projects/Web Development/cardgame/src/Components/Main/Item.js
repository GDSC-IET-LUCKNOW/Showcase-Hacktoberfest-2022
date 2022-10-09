import {
  Container,
  Block1,
  Block2,
} from "../../Styles/styledComponents/forItem";
import { useContext } from "react";
import GameContext from "../../store/game-context";
import { Fragment } from "react";
const Item = (props) => {
  const { url } = props.item;
  const ctx = useContext(GameContext);
  const steping = () => {
    ctx.movesFunction();
  };

  const clickedHandler = () => {
    props.cardClickHandler(props.item);
  };

  return (
    <Fragment>
      <Container
        onClick={(e) => {
          clickedHandler();
          steping();
        }}
      >
        <Block1 clicked={props.flipped}></Block1>
        <Block2 img={`"${url}"`} clicked={props.flipped}></Block2>
      </Container>
    </Fragment>
  );
};
export default Item;
