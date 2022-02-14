import Movie from './Movie'
const Movies = (movies) => {  
    return (
        <div className="movies">
          {movies.map((movie,index) => (<Movie key={movie.id} movie={movie}/>))}
        </div>
    )
}

export default Movies;