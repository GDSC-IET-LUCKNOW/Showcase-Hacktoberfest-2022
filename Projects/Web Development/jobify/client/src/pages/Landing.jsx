import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            deserunt inventore quo similique mollitia temporibus unde officiis
            tenetur sunt doloribus consequatur culpa accusamus alias
            perferendis, laborum expedita dolor eum atque! Eius corrupti, atque
            eligendi explicabo ut rerum numquam, blanditiis minus cum vitae
            dignissimos! Nihil, nisi. Eveniet rem sit quia?
          </p>
          <button
            className="btn btn-hero"
            onClick={() => {
              navigate("/register");
            }}
          >
            Login/Register
          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
