import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_1215628293_200013332000928069_434121.jpg",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/kinder/cards");

      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing", nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log("removing2", name);
  };

  return (
    <div className="tindercards">
      <div className="tinderCards__Container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
