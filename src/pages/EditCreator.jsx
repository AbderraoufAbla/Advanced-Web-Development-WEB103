import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom';

function EditCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) console.error('Error fetching creator:', error);
      else setCreator(data);
    }
    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('creators').update({
      name: creator.name,
      url: creator.url,
      description: creator.description,
      imageURL: creator.imageURL
    }).eq('id', id);
    if (error) console.error('Error updating creator:', error);
    else navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Creator</h2>
      <input type="text" value={creator.name} onChange={(e) => setCreator({ ...creator, name: e.target.value })} placeholder="Name" required />
      <input type="url" value={creator.url} onChange={(e) => setCreator({ ...creator, url: e.target.value })} placeholder="URL" required />
      <textarea value={creator.description} onChange={(e) => setCreator({ ...creator, description: e.target.value })} placeholder="Description" />
      <input type="url" value={creator.imageURL} onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })} placeholder="Image URL (optional)" />
      <button type="submit">Update Creator</button>
    </form>
  );
}

export default EditCreator;

