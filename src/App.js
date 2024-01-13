import Home from "./Home/Home.js";
import Favorite from "./components/Favorite/Favorite.js";
import About from "./components/About/About.js";
import Contrainer from "./components/Contrainer/Contrainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <main>
     <NavBar />
      <Contrainer>
        <Home />
        <About />
        <Favorite />
      </Contrainer>
    </main>
  );
};

export default App;