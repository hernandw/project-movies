import { Link } from 'react-router-dom'
import './MovieCard.css'
const imgURL = "https://image.tmdb.org/t/p/w300"

const MovieCard = ({ title, poster_path, id}) => {
  return (
    <div className="movie__container">
      <Link to={`/detail/${id}`}>
        <img className="movie__img" src={imgURL + poster_path} alt={title} />
        <h2 className="movie__title">{title}</h2>
      </Link>
    </div>
  )
}

export default MovieCard
