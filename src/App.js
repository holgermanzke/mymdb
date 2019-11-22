import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>MyMDb</h1>
      <header>Logo, Search, IconButto</header>
      <main>
        <MovieList />
      </main>
    </>
  );
}

export default App;
