import styled from "styled-components";
import img0 from "../../Images/img0.png";
export const Container = styled.div`
  overflow: hidden;
  perspective: 1500px;
  text-align: center;
  margin: 1rem;
  width: 10rem;
  height: 10rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 37.5em) {
    width: 17rem;
    height: 17rem;
  }
  @media (max-width: 23.125em) {
    width: 13rem;
    height: 13rem;
  }
`;

//transition: all 0.5s ease;
//box-shadow: 1rem 1rem 3rem rgba(55, 255, 0, 0.3) inset;
export const Block1 = styled.div`
  cursor: pointer;
  background-image: url("${img0}");
  background-position: center;
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease;
  backface-visibility: hidden;
  width: 100%;
  height: inherit;
  background-blend-mode: screen;
  transform: ${(props) => (!props.clicked ? "" : "rotateY(-180deg)")};
`;
export const Block2 = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  border: 1px solid #fff;
  border-radius: 5px;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease;
  backface-visibility: hidden;
  width: 100%;
  height: inherit;
  transform: ${(props) =>
    !props.clicked ? "rotateY(180deg)" : "rotateY(0deg)"};
`;
