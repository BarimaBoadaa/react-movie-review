import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = { reviewState: [] };
  }
  key = "SlG5vDy5yAg9UBkg0w0B7Ybxplx6oWT5";
  url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=${this.key}`;

  fetchReviews = async () => {
    try {
      const data = await fetch(this.url);
      const response = await data.json();
      this.setState({ reviewState: response.results });
      console.log(this.state.reviewState);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    return (
      <>
        {this.state.reviewState.map((item, index) => {
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
}

export default ClassComponent;
