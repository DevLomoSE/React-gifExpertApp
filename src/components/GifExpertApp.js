
import React, { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Yuhi-oh']);

  const handleAdd = (category) => {
    category = 'skdf';
    setCategories( cats => [...cats, category]);
  };

  return (
  <>
    <h2>GifExpertApp</h2>
    <hr />

    <button onClick={ handleAdd }>Add category</button>

    <ol>
      {categories.map( (cat, index) => {
        return <li key={index+1}>{cat}</li>;
      } )}
    </ol>
  </>
  );
};

export default GifExpertApp;
