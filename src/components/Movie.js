
const Movie = ({ movie }) => {
    
    console.log(movie);
    
    let note_color;
    if (movie.vote_average > 5) {
        note_color = 'green'
    } else {
        note_color = 'red'
    }

    return (
        <div className="movie">
            <h2 className="movie-title">{movie.title}</h2>
            <div className="img-info">
                <img className="movie-image" src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} alt="" />
                <p className="note"><span className={note_color + '_note'}>{movie.vote_average}</span>/10</p>
                <p className="movie-description">{movie.overview}</p>
            </div>
        </div>
    )
}

export default Movie; 