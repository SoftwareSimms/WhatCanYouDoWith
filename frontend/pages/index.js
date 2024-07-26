import React, { useState } from 'react';
import axios from 'axios';
import UseCaseCard from '../components/UseCaseCard';
import NounCard from '../components/NounCard';
import ResourceList from '../components/ResourceList';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [useCases, setUseCases] = useState([]);
  const [concreteNouns, setConcreteNouns] = useState([]);
  const [resources, setResources] = useState([]);

  const handleSearch = () => {
    axios.get(`/api/usecases?query=${searchTerm}`)
      .then(response => setUseCases(response.data))
      .catch(error => console.error(error));
  };

  const handleSelectUseCase = (useCase) => {
    axios.get(`/api/concretenouns?usecase=${useCase.id}`)
      .then(response => setConcreteNouns(response.data))
      .catch(error => console.error(error));
  };

  const handleSelectNoun = (noun) => {
    axios.get(`/api/resources?noun=${noun.id}`)
      .then(response => setResources(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">What Can You Do With...</h1>
      <input 
        type="text" 
        placeholder="Search for a use case..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border p-2 w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 mt-2">Search</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} useCase={useCase} onSelect={handleSelectUseCase} />
        ))}
      </div>
      {concreteNouns.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Concrete Nouns:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {concreteNouns.map((noun, index) => (
              <NounCard key={index} noun={noun} onSelect={handleSelectNoun} />
            ))}
          </div>
        </div>
      )}
      {resources.length > 0 && (
        <div className="mt-4">
          <ResourceList resources={resources} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
