import Seo from "../components/Seo";
import Link from "next/link";
import {useRouter} from "next/router";
import {useCallback} from "react";

const Index = ({results}: any) => {
  const router = useRouter();
  const onClick = useCallback((id: number | string, title: string) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title: title
      }
    }, `/movies/${id}`)
  }, [router]);
  return (
    <div>
      <div className={"container"}>
        <Seo title={"Home"}/>
        {results?.map((movie: any) => (
          <div key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
            <div className="movie">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={"poster"}/>
              <h4>
                <Link
                  href={{
                    pathname: `/movies/${movie.id}`,
                    query: {
                      title: movie.original_title
                    }
                  }} as={`/movies/${movie.id}`}>
                  <a>{movie.original_title}</a>
                </Link>
              </h4>
            </div>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }

          .movie {
            cursor: pointer;
          }

          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }

          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }

          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Index;

export const getServerSideProps = async () => {
  const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {results},
  };
}