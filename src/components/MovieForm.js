import React, { useState } from "react";
import InputField from "./InputField";

const MovieForm = ({ addMovie }) => {
  const [MovieTitle, setMovieTitle] = useState("");
  const [MovieYear, setMovieYear] = useState("");
  const [TitleError, setTitleError] = useState("");
  const [YearError, setYearError] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const validateForm = () => {
    resetErros();
    let validate = true;
    if (!MovieTitle) {
      setTitleError("영화제목을 넣어주세요");
      validate = false;
    }
    if (!MovieYear) {
      setYearError("개봉년도를 넣어주세요");
      validate = false;
    }
    return validate;
  };

  const resetErros = () => {
    setTitleError("");
    setYearError("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: MovieTitle,
        year: MovieYear,
      });
      resetErros();
      resetForm();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputField
        type="text"
        value={MovieTitle}
        placeholder="영화제목"
        onChange={(e) => setMovieTitle(e.target.value)}
        errorMessage={TitleError}
      />
      <InputField
        type="numberMovieYear"
        value={MovieYear}
        placeholder="개봉년도"
        onChange={(e) => setMovieYear(e.target.value)}
        errorMessage={YearError}
      />
     
      <button type="submit">영화추가</button>
    </form>
  );
};

export default MovieForm;
