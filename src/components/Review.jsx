import React, { useState } from "react";
import {
  BiSolidQuoteRight,
  BiChevronLeftCircle,
  BiChevronRightCircle,
} from "react-icons/bi";
import "../app.css";
import data from "../data";
const Review = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const changeReview = (action, array) => {
    if (action === "increase") {
      if (reviewIndex === array.length - 1) {
        setReviewIndex(0);
      } else {
        setReviewIndex((prevState) => {
          return prevState + 1;
        });
      }
    }
    if (action === "decrease") {
      if (reviewIndex === 0) {
        setReviewIndex(array.length - 1);
      } else {
        setReviewIndex((prevState) => {
          return prevState - 1;
        });
      }
    }
  };
  function generateRandomNumber(array) {
    const randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
  }
  const randomReview = (array) => {
    let randomNumber = generateRandomNumber(array);
    if (randomNumber === reviewIndex) {
      randomReview(array);
      return;
    }
    setReviewIndex(randomNumber);
  };
  return (
    <div className="review-project">
      <div className="container">
        <div className="review-card">
          <div className="image">
            <img src={data[reviewIndex].image} alt={data[reviewIndex].name} />
            <span className="quote">
              <BiSolidQuoteRight />
            </span>
          </div>
          <div className="person-details">
            <h2 className="name">{data[reviewIndex].name}</h2>
            <h3 className="job-title">{data[reviewIndex].job}</h3>
            <p className="describtion">{data[reviewIndex].text}</p>
          </div>
          <div className="review-controls">
            <div className="arrows">
              <BiChevronLeftCircle
                onClick={() => changeReview("decrease", data)}
              />
              <BiChevronRightCircle
                onClick={() => changeReview("increase", data)}
              />
            </div>
            <button className="surprise" onClick={() => randomReview(data)}>
              surprise me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
