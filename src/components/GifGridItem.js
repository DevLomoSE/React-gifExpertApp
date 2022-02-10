import React from 'react';
import PropTypes from "prop-types";

const GifGridItem = ({id, title, img}) => {

  return (
    <div className="card animate__animated animate__heartBeat animate__zoomInUp">
      <img src={img} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default GifGridItem;
