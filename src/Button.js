import PropTypes from "prop-types";
import styles from "./Button.module.css"; // CSS module for this(moduler) is applied to here.

function Button({ text }) {
	console.log(text);
	/*
	return (
		<button
			style={{
				backgroundColor: "tomato",
				color: "white",
			}}
		>
			{text}
		</button>
	);
    */

	/*
	return <button className={styles.btn}>{text}</button>; // Name of button element is set randomly to rendered document.
    */
	return <button className={styles.title}>{text}</button>; // Name of button element is set randomly to rendered document.
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Button;
