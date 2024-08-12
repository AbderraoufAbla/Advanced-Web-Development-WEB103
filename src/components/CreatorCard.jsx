import React from 'react';
import { Link } from 'react-router-dom';

function CreatorCard({ creator }) {
  return (
    <div className="card">
      <img src={creator.imageURL} alt={creator.name} />
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
      <Link to={`/edit/${creator.id}`}>Edit</Link>
    </div>
  );
}

export default CreatorCard;

