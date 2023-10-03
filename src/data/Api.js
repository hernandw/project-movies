



export const getMovies = async () => {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  return data.results;
};


