import React from "react";
import Card from "./Card";

function CardList({ characters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CardList;
