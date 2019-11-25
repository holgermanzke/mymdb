import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import MovieList from "./components/MovieList";
import Header from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = React.useState("franz");
  return (
    <>
      <GlobalStyles />

      <h1>MyMDb</h1>
      <Header />
      <main>
        <MovieList searchValue={searchValue} />
      </main>
    </>
  );
}

export default App;
