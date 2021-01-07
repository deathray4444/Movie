import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [Movies, setMovies] = useState([]);
  const removeMovie = (id) => {
    setMovies(
      Movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = Movies.length
    ? Movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다";

  const addMovie = (movie) => {
    setMovies([...Movies, movie]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/movies">
          <h1>Movie list</h1>
          <MovieForm addMovie={addMovie} />
          {renderMovies}
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
      </div>
    </Router>
  );
};

export default App;
