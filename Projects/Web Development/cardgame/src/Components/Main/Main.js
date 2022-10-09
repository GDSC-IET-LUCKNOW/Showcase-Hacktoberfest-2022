import { useState, useEffect } from "react";
import classes from "../../Styles/styles/Main.module.css";
import Item from "./Item";
import { gameData } from "../../pureJS/gameData";
import { useContext } from "react";
import GameContext from "../../store/game-context";

const Main = (props) => {
  const ctx = useContext(GameContext);
  const [solutionToggled, setSolutionToggled] = useState(false);
  const [ids, setIds] = useState(ctx.randomId);
  const [data, setData] = useState(gameData);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  useEffect(() => {
    if (cardOne && cardTwo) {
      if (cardOne.id === cardTwo.id && cardOne.n !== cardTwo.n) {
        setData((card) => {
          return card.map((item) => {
            if (item.id === cardOne.id) {
              return { ...item, check: true };
            } else {
              return item;
            }
          });
        });
        filterChoice();
      } else {
        if (cardOne !== cardTwo) {
          setTimeout(() => {
            filterChoice();
          }, 1000);
        }
      }
    }
  }, [cardOne, cardTwo]);

  useEffect(() => {
    setIds(ctx.randomId);
    setData((card) => {
      return card.map((item) => {
        return { ...item, check: false };
      });
    });
  }, [ctx.randomId]);

  useEffect(() => {
    setSolutionToggled(ctx.toggleSolution);
  }, [ctx.toggleSolution]);

  let flag = 0;
  for (let i = 0; i < 16; i++) {
    if (data[i].check === false) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    setTimeout(() => {
      alert("Congratulations... You Won... Start a new game...Have fun!!!");
    }, 100);
  }

  const filterChoice = () => {
    setCardOne(null);
    setCardTwo(null);
  };

  const cardClickHandler = (item) => {
    cardOne ? setCardTwo(item) : setCardOne(item);
  };

  return (
    <main className={classes.main}>
      {ids.map((index) => {
        const IndCard = data[index];
        return (
          <Item
            key={IndCard.n}
            item={IndCard}
            flipped={
              IndCard === cardOne ||
              IndCard === cardTwo ||
              IndCard.check ||
              solutionToggled
            }
            cardClickHandler={cardClickHandler}
          />
        );
      })}
    </main>
  );
};
export default Main;
