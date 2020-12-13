import React, { useState } from "react";
import "./styles.css";

//data
const seriesData = {
  fiction: [
    { name: "Stranger Things", rating: "imdb 8.8/10" },
    { name: "Black Mirror", rating: "imdb 8.8/10" },
    { name: "The Walking Dead", rating: "imdb 7.6/10" },
    { name: "The 100", rating: "imdb 7.6/10" }
  ],

  sitcom: [
    { name: "The Office", rating: "imdb 8.9/10" },
    { name: "Brooklyn 99", rating: "imdb 8.4/10" },
    { name: "Friends", rating: "imdb 8.1/10" },
    { name: "The Big Bang Theory", rating: "imdb 8.1/10" }
  ],

  drama: [
    { name: "Pretty Little Liars", rating: "imdb 7.4/10" },
    { name: "The Vampire Diaries", rating: "imdb 7.7/10" },
    { name: "Riverdale", rating: "imdb 6.9/10" },
    { name: "Gossip Girl", rating: "imdb 7.4/10" }
  ],

  horror: [
    { name: "Haunting of Hill House", rating: "imdb 8.6/10" },
    { name: "Haunting of Bly Manor", rating: "imdb 7.4/10" }
  ]
};

//styles
buttonStyle = {
  cursor: "pointer",
  background: "white",
  borderRadius: "2rem",
  padding: "0.5rem 1rem",
  border: "2px solid #A78BFA",
  margin: "0.5rem"
};

listStyle = {
  listStyle: "none",
  padding: "1rem",
  border: "1px solid #D1D5DB",
  width: "90%",
  margin: "1rem 0rem",
  borderRadius: "0.5rem",
  background: "#DDD6FE"
};

largeFont = {
  fontSize: "larger"
};

smallFont = {
  fontSize: "smaller"
};

navBrand = {
  textAlign: "left",
  fontSize: "1.5rem"
};

const containerCenter = { "max-width": "500px", margin: "auto" };

export default function App() {
  const [selectedType, setType] = useState("fiction");

  function onClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <nav>
        <div style={navBrand}>seriesRecommender</div>
      </nav>

      <div style={containerCenter}>
        <h1 style={{ margin: "0.5rem" }}>What to watch?</h1>

        <div>
          {Object.keys(seriesData).map((type) => (
            <button style={buttonStyle} onClick={() => onClickHandler(type)}>
              <span>{type}</span>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {seriesData[selectedType].map((type) => (
              <li style={listStyle}>
                <div style={largeFont}>{type.name}</div>
                <div style={smallFont}>{type.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
