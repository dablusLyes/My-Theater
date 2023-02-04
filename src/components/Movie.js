const Movie = ({ movie }) => {
  console.log(movie);

  let note_color;
  if (movie.vote_average >= 7.5) {
    note_color = "green";
  } else if (movie.vote_average >= 5 && movie.vote_average < 8) {
    note_color = "orange";
  } else {
    note_color = "red";
  }

  return (
    <div className="movie">
      <div className="img-info">
        <img
          className="movie-image"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt=""
        />
        <p className="note">
          <span className={note_color + "_note"}>{movie.vote_average}</span>/10
        </p>
        <p className="movie-description">{movie.overview}</p>
      </div>
      {/* <h2 className="movie-title">{movie.title}</h2> */}
    </div>
  );
};

export default Movie;
