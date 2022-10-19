import {useEffect, useState} from "react";
import Seo from "../components/Seo";

const API_KEY = "4e51c343f2941ca1820cdc001197944e";

const Index = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async() => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title={"Home"} />
      {! movies && <h4>Loading...</h4>}
      {movies?.map((movie: any) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Index;