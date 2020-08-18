import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  setTimeout(() => {});
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setstate({
          data: imgs,
          loading: false,
        });
      }, 1500);
    });
  }, [category]);
  return state;
};
