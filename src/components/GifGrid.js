import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

/**
 * Component to retrieve images about the category.
 *
 * @param category search criteria
 */
const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && (
        <p className="animate__animated animate__pulse">"
          Cargando..."
        </p>
      )}

      <div className="card-grid">
        {images.map((img) => {
          return (
            <>
              <GifGridItem key={img.id} {...img} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default GifGrid;
