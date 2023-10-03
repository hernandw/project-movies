import './MovieCard.css'
const imgURL = "https://image.tmdb.org/t/p/w300"

const MovieCard = ({ title, poster_path}) => {
  return (
    <div className="movie__container">
      <img className="movie__img" src={imgURL + poster_path} alt="" />
      <div>{title}</div>
    </div>
  )
}

export default MovieCard
