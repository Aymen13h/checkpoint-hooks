import React from 'react'
import EditMovie from './EditMovie'
import StarRating from './StarRating'

const MovieCard = ({movie, handleDelete, handleEdit}) => {
  return (
    <div className='movie-card'>
        <h3>{movie.name}</h3>
        <img src={movie.image} alt={movie.name}/>
        <StarRating rating={movie.rating} />
        <p>{movie.rating}</p>
        <p>{movie.data}</p>
        <button id='btn-delete' onClick={() => handleDelete(movie.id)}>Delete</button>
        <EditMovie movie={movie} handleEdit={handleEdit}/>

    </div>
  )
}

export default MovieCard