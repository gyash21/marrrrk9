import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  English: [
    { name: "305", singer: "Shawn Mendes" },
    { name: "Thinking Out Loud", singer: "Ed Sheeran" },
    { name: "Running Out", singer: "Etham" }
  ],
  Hindi: [
    { name: "Kaise Hua", singer: "Vishal Mishra" },
    { name: "Teri Jhuki Nazar", singer: "Shafqat Amanat Ali" },
    { name: "Kun Faya Kun", singer: "A R Rahman" }
  ],

  Marathi: [
    { name: "Man Udhan Varyche", singer: "Shankar Mahadevan" },
    { name: "Tula Japnar Ahe", singer: "Adarsh, Ronkini" },
    { name: "Saaj Hyo Tuza", singer: "Onkatswaroop" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("English");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ paddingLeft: "9rem" }}>
        <span role="img" aria-label="musical-emoji">
          🎸
        </span>{" "}
      </h1>
      <h2 style={{ paddingLeft: "2.7rem" }}>
        Fancy my music taste? <span role="img" aria-label="loop-emoji"></span>
      </h2>
      <div style={{ marginBottom: "2rem", paddingLeft: "1.6rem" }}>
        I have listed my Top 3 song in each category. Check them out below-
      </div>

      <div style={{ paddingLeft: "3.8rem" }}>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="genre-btn"
          >
            {genre}
          </button>
        ))}
      </div>

      <hr align="left" width="50%" />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "45%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{music.name}</div>
              <div style={{ fontSize: "smaller" }}>{music.singer}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p style={{ paddingTop: "4.5rem" }}>Made by Yash</p>
      </footer>
    </div>
  );
}
