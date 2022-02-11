

const Movies = ({ movie }) => {
    return (
        <div className="movie">
            <h3 className="movie-title">{movie.title}</h3>
            <img className="movie-image" src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} alt="" />
            <p className="movie-overview">{movie.overview}</p>
        </div>
    )
}

export default Movies;