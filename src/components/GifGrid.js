import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

/**
 * Component to retrieve images about the category.
 *
 * @param category search criteria
 */
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `${process.env.REACT_APP_GIPHY_GIFS_LINK}/search?q=${category}&limit=10&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        img: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      {images.map( img => {
        return (
            <>
                <GifGridItem 
                    key={img.id}
                    {...img}
                />  
            </>
        );
      })}
    </>
  );
};

export default GifGrid;
