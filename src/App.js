import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import Contrainer from "./components/Contrainer/Contrainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <main>
     <NavBar />
      <Contrainer>
        <Hero />
        <SearchForm />
        <List />
      </Contrainer>
    </main>
  );
};

export default App;