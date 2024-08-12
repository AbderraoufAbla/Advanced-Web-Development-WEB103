import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import { useParams } from 'react-router-dom';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState({});

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) console.error('Error fetching creator:', error);
      else setCreator(data);
    }
    fetchCreator();
  }, [id]);

  return (
    <div>
      <h1>{creator.name}</h1>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
    </div>
  );
}

export default ViewCreator;

