import React from 'react';

const GifGridItem = ({id, title, img}) => {

  return (
    <div className="card animate__animated animate__heartBeat animate__zoomInUp">
      <img src={img} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
