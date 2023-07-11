import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      // setText('')
    }
  };
  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="type favorite meal"
          className="input form-input"
        ></input>
        <button type="submit" className="button btn">
          search
        </button>
        <button
          type="button"
          className="button btn btn-hipster"
          onClick={handleRandomMeal}
        >
          surprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
