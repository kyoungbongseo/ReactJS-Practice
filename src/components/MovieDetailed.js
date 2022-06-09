import PropTypes from "prop-types";

function MovieDetailed({ coverImg, title, year, rating, genres, description }) {
	return (
		<div>
			{/*<img src={coverImg} alt={title}></img>*/}
			<table border="1">
				<tbody>
					<tr>
						<td>title</td>
						<td>{title}</td>
					</tr>
					<tr>
						<td>year</td>
						<td>{year}</td>
					</tr>
					<tr>
						<td>rating</td>
						<td>{rating}</td>
					</tr>
					<tr>
						<td>Genres</td>
						<td>{genres.toString()}</td>
					</tr>
					<tr>
						<td>Description</td>
						<td>{description}</td>
					</tr>
					<tr></tr>
				</tbody>
			</table>
		</div>
	);
}

MovieDetailed.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
};

export default MovieDetailed;
