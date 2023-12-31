import { useEffect, useState } from "react";
import "./styles.css";
import images from "./Images";

export default function App() {
  const [src, setSrc] = useState(images.walter.at(6));
  const [quote, setQuote] = useState({});

  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    document.addEventListener("keydown", function (e) {
      if (e.code === "Space") {
        getQuotes();
      }
    });
  }, []);
  async function getQuotes() {
    try {
      setError(false);
      setIsLoading(true);
      let res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");

      let quotes = await res.json();
      setIsLoading(false);
      if (quotes[0].author === "Walter White") UpdateImage(images.walter);
      else if (quotes[0].author === "Hank Schrader") UpdateImage(images.hank);
      else if (quotes[0].author === "Jesse Pinkman") UpdateImage(images.jesse);
      else if (quotes[0].author === "Saul Goodman") UpdateImage(images.saul);
      else if (quotes[0].author === "Saul Goodman") UpdateImage(images.saul);
      else if (quotes[0].author === "Mike Ehrmantraut")
        UpdateImage(images.mike);
      else UpdateImage(images.br);

      setQuote(quotes[0]);
    } catch (e) {
      setError(e);
    }
  }
  useEffect(function () {
    getQuotes();
  }, []);

  function UpdateImage(x) {
    setSrc(x[Math.floor(Math.random() * x.length)]);
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
              <div className="sp-div">
                <div className="spinner"></div>
              </div>
            </Loading>
          ) : (
            <div className="image" style={{ backgroundImage: `url(${src})` }}>
              {""}
            </div>
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
      <button onClick={getQuotes}>
        {error ? "Try again" : "Random quote"}
      </button>
    </div>
  );
}

function ErrorMessage({ err }) {
  return (
    <div className="error-div">
      <p id="err">Something went wrong , here is the error message :</p>
      <div className="error">{err.message}</div>
    </div>
  );
}
function Loading({ children, h = 100 }) {
  return (
    <div className="loading" style={{ height: `${h}px` }}>
      {children}
    </div>
  );
}
