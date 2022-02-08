import React from 'react';

/**
 * Component to retrieve images about the category.
 *
 * @param category search criteria
 */
const GifGrid = ({ category }) => {

    const getGifs = async() => {
        const url = `${process.env.REACT_APP_GIPHY_GIFS_LINK}/search?q=${category}&limi=10&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
        
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                img: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    getGifs();

  return (
    <>
        <h2>{category}</h2>
    </>
    );
};

export default GifGrid;
