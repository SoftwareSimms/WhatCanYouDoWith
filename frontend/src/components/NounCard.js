import React from 'react';

const NounCard = ({ noun, onSelect }) => {
  return (
    <div className="border p-4 rounded shadow" onClick={() => onSelect(noun)}>
      <h3 className="text-xl font-bold">{noun.name}</h3>
    </div>
  )
}

export default NounCard;
