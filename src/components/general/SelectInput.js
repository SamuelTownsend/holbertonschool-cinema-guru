import "./general.css";
import PropTypes from 'prop-types';

export default function SelectInput({
	label,
	options,
	className,
	value,
	setValue
}) {
	function handleSelect(e) {
		setValue(e.target.value);
	}
	const optionsList = options.map((option) =>
		<option value={option}>{option}</option>
	);
	return (
		<div className={className + '_selectInput'}>
			<label>{label}:</label>
			<select selected={value}
				onChange={(e) => {handleSelect(e)}}>
					<option value='default'>Default</option>
					{optionsList}
			</select>
		</div>
	);
}

SelectInput.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	className: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	setValue: PropTypes.func.isRequired
}

SelectInput.defaultProps = {
	label: "",
	options: [],
	className: "",
	value: "",
	setValue: () => {}
}

