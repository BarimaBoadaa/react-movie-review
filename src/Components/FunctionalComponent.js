import React, { useState, useEffect } from "react";

function FunctionalComponent() {
  const [reviewState, setReviewState] = useState([]);

  const key = "SlG5vDy5yAg9UBkg0w0B7Ybxplx6oWT5";
  const url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=${key}`;

  const fetchReviews = async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setReviewState(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      {reviewState.map((item, index) => {
        return (
          <div key={index}>
            <h3>byline:{item.byline}</h3>
            <p>critics pick:{item.critics_pick}</p>
            <p>title:{item.display_title}</p>
            <p>headline.{item.headline}</p>
            <img src={item.multimedia.src} alt="" />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default FunctionalComponent;
