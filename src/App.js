import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CardList from "./CardList";
import ErrorFallback from "./ErrorFallback";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Rick and Morty Characters: Error Boundary Example</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ErrorBoundary
          FallbackComponent={ErrorFallback} 
          onReset={() => {
            setLoading(true);
            fetch("https://rickandmortyapi.com/api/character")
              .then((response) => response.json())
              .then((data) => {
                setCharacters(data.results);
                setLoading(false);
              });
          }}
        >
          <CardList characters={characters} />
        </ErrorBoundary>
      )}
    </div>
  );
}

export default App;
