import "./Styles/styles/base.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Options from "./Components/Options/Options";
import GameProvider from "./store/ContextProvider";
function App() {
  return (
    <GameProvider>
      <Header />
      <main>
        <Options />
        <Main />
      </main>
    </GameProvider>
  );
}

export default App;
