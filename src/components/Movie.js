import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//function Movie({ coverImg, title, summary, genres }) {
function Movie({ id, coverImg, title, summary, genres }) {
	/*
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p>{summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
	*/
	return (
		<div>
			{/*<img src={coverImg} alt={title} />*/}
			<h2>
				{/*<a href="/movie">{title}</a>*/}
				<Link
					to={
						process.env.NODE_ENV === "production"
							? `/ReactJS-Practice/movie/${id}`
							: `/movie/${id}`
					}
				>
					{title}
				</Link>
				{/* <Link> is used to move to a web page without refreshing browser. */}
			</h2>
			<p>{summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
