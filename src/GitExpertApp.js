import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState([]);
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setcategories={setcategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
