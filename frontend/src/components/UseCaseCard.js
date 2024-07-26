import React from 'react';

const UseCaseCard = ({ useCase, onSelect }) => {
  return (
    <div className="border p-4 rounded shadow" onClick={() => onSelect(useCase)}>
      <h3 className="text-xl font-bold">{useCase.title}</h3>
      <p>{useCase.description}</p>
    </div>
  )
}

export default UseCaseCard;
