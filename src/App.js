import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import MovieList from "./components/MovieList";
// import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />

      <h1>MyMDb</h1>
      <header />
      <main>
        <MovieList />
      </main>
    </>
  );
}

export default App;
