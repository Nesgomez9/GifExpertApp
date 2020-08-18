import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__animated animate__fadeIn">{category}</h2>
      {loading && (
        <p className="animate__animated animate__flipInX">"Cargando..."</p>
      )}
      <div className="card_grid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};
export default GifGrid;
