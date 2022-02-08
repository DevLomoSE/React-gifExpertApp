import React from 'react';

const GifGridItem = ({id, title, img}) => {

  return (
    <div>
        <img src={img} alt={title}></img>
        <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
