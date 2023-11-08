import "./general.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({
	title,
	setTitle
}) {
	function handleInput(e) {
		setTitle(e.target.value)
	}
	return (
		<div className="SearchBar">
			<FontAwesomeIcon icon={faSearch} />
			<input type='text'
				placeholder={title}
				onChange={(e) => handleInput(e)} />
		</div>
	);
}

SearchBar.propTypes = {
	title: PropTypes.string.isRequired,
	setTitle: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
	title: "",
	setTitle: () => {}
}