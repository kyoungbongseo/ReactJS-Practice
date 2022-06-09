import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	//{{
	/*
	const getMovies = async () => {
		
		//{{ const response = await fetch(
		// 	`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
		// );
		//}} const json = await response.json();
        
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
			)
		).json();

		setMovies(json.data.movies);
		setLoading(false);
	};
	
	useEffect(() => {

		//{{ fetch(
		// 	//`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
		// 	"about:blank"
		// )
		// 	.then((response) => response.json())
		//}} 	.then((json) => setMovies(json.data.movies));

		getMovies();
	}, []);
	*/
	useEffect(() => {
		setTimeout(() => {
			setLoading(false); // Calling setLoading function is done before calling setMovies function to log list of movies once.
			setMovies([
				{
					id: 0,
					title: "Movie A",
					summary: "Summary A",
					genres: ["Genres A-1", "Genres A-2"],
					medium_cover_image: "https://...",
				},
				{
					id: 1,
					title: "Movie B",
					summary: "Summary B",
					genres: ["Genres B-1", "Genres B-2"],
					medium_cover_image: "https://...",
				},
			]);
		}, 1000);
	}, []);
	/////////////////////}}

	console.log(movies);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
