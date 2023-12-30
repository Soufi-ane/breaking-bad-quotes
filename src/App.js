import { useEffect, useState } from "react";
import "./styles.css";
import images from "./Images";

export default function App() {
  const [src, setSrc] = useState(images.walter.at(6));
  const [quote, setQuote] = useState({});
  const [click, setClick] = useState(false);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getQuotes() {
        try {
          setError(false);
          setIsLoading(true);
          let res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");

          let quotes = await res.json();
          setIsLoading(false);
          if (quotes[0].author === "Walter White") UpdateImage(images.walter);
          else if (quotes[0].author === "Hank Schrader")
            UpdateImage(images.hank);
          else if (quotes[0].author === "Jesse Pinkman")
            UpdateImage(images.jesse);
          else if (quotes[0].author === "Saul Goodman")
            UpdateImage(images.saul);
          else if (quotes[0].author === "Saul Goodman")
            UpdateImage(images.saul);
          else if (quotes[0].author === "Mike Ehrmantraut")
            UpdateImage(images.mike);
          else UpdateImage(images.br);
          console.log(Math.floor(Math.random() * images.jesse.length));
          setQuote(quotes[0]);
        } catch (e) {
          console.log(e);
          setError(e);
        }
      }
      getQuotes();
    },

    [click]
  );
  function UpdateImage(x) {
    setSrc(x[Math.floor(Math.random() * x.length)]);
  }
  function HandleClick() {
    setClick((click) => !click);
  }
  return (
    <div className="app">
      {error ? (
        <ErrorMessage err={error} />
      ) : (
        <>
          <div
            className="container"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
          {isLoading ? (
            <Loading h={600}>
              <div className="spinner"></div>
            </Loading>
          ) : (
            <img src={src} alt="breaking bad" />
          )}
          <div className="text">
            {isLoading ? (
              <Loading>
                <p id="load" className="quote">
                  Loading quote...
                </p>
              </Loading>
            ) : (
              <>
                <p className="quote">{quote.quote}</p>
                <p className="author">{quote.author}</p>
              </>
            )}
          </div>
        </>
      )}
      <button onClick={HandleClick}>Random quote</button>
    </div>
  );
}

function ErrorMessage({ err }) {
  return <p className="error">{err.message}</p>;
}
function Loading({ children, h = 100 }) {
  return (
    <div className="loading" style={{ height: `${h}px` }}>
      {children}
    </div>
  );
}