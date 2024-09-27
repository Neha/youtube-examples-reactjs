import React from "react";

function Card({ character }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={character.image} alt={character.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{character.name}</h2>
        <p className="text-gray-600">Status: {character}</p>
        <p className="text-gray-600">Species: {character.species}</p>
        <p className="text-gray-600">Gender: {character.gender}</p>
      </div>
    </div>
  );
}

export default Card;
