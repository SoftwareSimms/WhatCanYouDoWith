import React from 'react';

const ResourceList = ({ resources }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Resources:</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResourceList;
