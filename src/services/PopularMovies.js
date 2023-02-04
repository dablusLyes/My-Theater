import axios from "axios";

const GetPopular = async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=8433cf99d057dc015d472aaa543637c0&language=en-US&page=1"
  );
  const movies = await data.data.results;

  console.log(movies);

  return movies;
};

export default GetPopular;
