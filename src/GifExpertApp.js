
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Yuhi-oh']);

  return (
  <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories } />
    <hr />

    <ol>
      {
        categories.map( cat => {
          return <GifGrid key={1}
              category={ cat }/>
        })
      }
    </ol>
  </>
  );
};

export default GifExpertApp;
