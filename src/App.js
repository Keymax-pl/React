import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import Contrainer from "./components/Contrainer/Contrainer";

const App = () => {
  return (
    <Contrainer>
      <Hero />
      <SearchForm />
      <List />
    </Contrainer>
  );
};

export default App;