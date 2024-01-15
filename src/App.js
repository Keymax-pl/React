import Home from "./Home/Home.js";
import Favorite from "./components/Favorite/Favorite.js";
import About from "./components/About/About.js";
import NotFound from "./components/NotFound/NotFound.js";
import Contrainer from "./components/Contrainer/Contrainer";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import List from "./components/List/List.js";

const App = () => {
  return (
<main>
      <NavBar />
      <Contrainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/1" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Contrainer>
 </main>
  );
};

export default App;