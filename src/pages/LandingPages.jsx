
import { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import { ContextMovie } from '../components/ContextMovie'
import './LandingPages.css'

const LandingPages = () => {
    const { user, peliculas } = useContext(ContextMovie)
    
  return (
    <div className='container'>
          {
              peliculas.map((pelicula) => {
                  return <MovieCard user={user} {...pelicula} key={pelicula.id} />
              })
      }
    </div>
  )
}

export default LandingPages
