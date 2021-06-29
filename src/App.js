import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const randomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setData(data);
    console.log(`${data.content} —${data.author}`);
  };
  useEffect(() => {
    randomQuote();
    // function updateQuote() {
    //   randomQuote();
    //   console.log("hello");
    // }
  }, []);
  // // Do not render until the first quote is loaded
  // if (!data) return null;
  return (
    <div className="App bg-primary w-75 mx-auto mt-5">
      <Card id="quote-box">
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p id="text"> {data.content} </p>
            <footer className="blockquote-footer">
              <cite title="Source Title" id="author">
                {data.author}
              </cite>
            </footer>
          </blockquote>
          <Button
            variant="primary"
            className="m-3"
            id="new-quote"
            onClick={randomQuote}
          >
            New Quote
          </Button>
          <br />
          <a href="https://twitter.com/intent/tweet" id="tweet-quote">
            <i className="fa fa-twitter-square fa-2x " aria-hidden="true"></i>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
