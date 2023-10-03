import { createContext, useEffect, useState } from "react";
import { getMovies } from '../data/Api';

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQwMDM1YmUwMWM5YTY4NzFkNTAxNDUyYjZjOWJiNSIsInN1YiI6IjY1MWFmNmFiOTY3Y2M3MzQyNWYxMWE5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ESE4Yuk1ySvj5B00PArlK8sLLqJpei8f9sr2osyoKTM",
  },
};

export const ContextMovie = createContext();
export const ContextMovieProvider = ({ children }) => {
const [peliculas, setPeliculas] = useState([]);
    
    
const getMovies = async () => {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  setPeliculas(data.results);
};

  useEffect(() => {
      
      getMovies()
      
  }, [])

  

  return (
    <ContextMovie.Provider value={{ peliculas }}>
      {children}
    </ContextMovie.Provider>
  );
};
