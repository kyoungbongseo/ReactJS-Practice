import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailed from "../components/MovieDetailed";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});

	const { id } = useParams();

	//{{
	/*
	//const getMovie = async () => {
	const getMovie = async (id) => {

		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setLoading(false);
		//setMovie(json);
		setMovie(json.data.movie);

		//console.log(json);
	};

	useEffect(() => {
		console.log(`[useEffect] id = ${id}`);
		
		//getMovie();
		getMovie(id);

	//}, []);	// Warning: React Hook useEffect has a missing dependency: 'id'. Either include it or remove the dependency array react-hooks/exhaustive-deps
	}, [id]);
	*/
	useEffect(() => {
		console.log(`[useEffect] id = ${id}`);

		setTimeout(() => {
			setLoading(false); // Calling setLoading function is done before calling setMovies function to log list of movies once.
			setMovie(
				id === "0"
					? {
							title: "Movie A",
							medium_cover_image: "https://...",
							year: 2000,
							rating: 9.5,
							genres: ["Genres A-1", "Genres A-2"],
							description_full: "Description A",
					  }
					: {
							title: "Movie B",
							medium_cover_image: "https://...",
							year: 2000,
							rating: 8.5,
							genres: ["Genres B-1", "Genres B-2"],
							description_full: "Description B",
					  }
			);
		}, 1000);
		//}, []);	// Warning: React Hook useEffect has a missing dependency: 'id'. Either include it or remove the dependency array react-hooks/exhaustive-deps
	}, [id]);
	/////////////////////}}

	//console.log(id);
	//console.log(movie);
	return (
		<div>
			<h1>
				Detailed information of movie {loading ? "" : `'(${movie.title})'`}
			</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<MovieDetailed
					coverImg={movie.medium_cover_image}
					title={movie.title}
					year={movie.year}
					rating={movie.rating}
					genres={movie.genres}
					description={movie.description_full}
				/>
			)}
		</div>
	);
}

export default Detail;
