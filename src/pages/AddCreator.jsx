import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('creators').insert([{ name, url, description, imageURL }]);
    if (error) console.error('Error adding creator:', error);
    else navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Creator</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL (optional)" />
      <button type="submit">Add Creator</button>
    </form>
  );
}

export default AddCreator;

