// import axios from 'axios'
import { useState } from "react";
// import { v4 as myNewID } from "uuid";
// const URL="http://localhost:8000/api/users/me";
// import swStadiums from "../../data/stadiums.json"

const arendaData = [
  {
    id: 1,
    date: "Monday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
  {
    id: 2,
    date: "Tuesday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
  {
    id: 3,
    date: "Wednesday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
  {
    id: 4,
    date: "Thursday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
  {
    id: 5,
    date: "Friday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
  {
    id: 6,
    date: "Saturday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
  {
    id: 7,
    date: "Sunday",
    rents: Array(12)
      .fill(null)
      .map((el, idx) => ({ id: idx })),
  },
];

export const Calendar = () => {
  const [arenda, setArenda] = useState(arendaData);

  const handleArendaChange = (day, rent) => {
    if (
      window.confirm(`day: ${day.date}  
                hour: ${rent.id}`) === true
    ) {
      setArenda((prevElement) =>
        prevElement.map((dayElem) => {
          if (dayElem.id === day.id) {
            return {
              ...dayElem,
              rents: dayElem.rents.map((rentElem) => {
                if (rentElem.id === rent.id) {
                  return { ...rentElem, isColored: !rentElem.isColored };
                } else return rentElem;
              }),
            };
          } else return dayElem;
        })
      );
    } else {
      console.log("nothing");
    }
  };

  console.log(arenda);
  
  return (
    <div style={{ display: "flex" }}>
      {arenda.map((day, dayIndex) => (
        <div key={dayIndex}>
          {day.rents.map((rent, rentIdx) => (
            <div
              key={rentIdx}
              onClick={() => handleArendaChange(day, rent)}
              style={{
                border: "1px solid black",
                padding: "6px 12px",
                width: "200px",
                height: "50px",
                backgroundColor: rent.isColored ? "red" : "white",
              }}
            >
              {rentIdx}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};