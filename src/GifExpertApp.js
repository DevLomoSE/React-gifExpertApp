
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Yuhi-oh']);

  // const handleAdd = (category) => {
  //   category = 'cat';
  //   setCategories( cats => [...cats, category]);
  // };

  return (
  <>
    <h2>GifExpertApp</h2>
    <AddCategory />
    <hr />

    {/* <button onClick={ handleAdd }>Add category</button> */}

    <ol>
      {categories.map( (cat, index) => {
        return <li key={index+1}>{cat}</li>;
      } )}
    </ol>
  </>
  );
};

export default GifExpertApp;
