import classes from "../../Styles/styles/PopUp.module.scss";

const PopUp = () => {
  return (
    <div className={classes["Modal"]}>
      <div className={classes["pop"]}>
        <p>Congratulations!!!</p>
        <p>You Won...!</p>
        <p>Accuracy: 40%</p>
      </div>
    </div>
  );
};
export default PopUp;
//************************COMING SOON************************ */
