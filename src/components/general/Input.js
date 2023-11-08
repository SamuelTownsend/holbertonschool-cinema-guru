import "./general.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input({
	label,
	type,
	className,
	value,
	setValue,
	icon,
	inputAttributes
}) {
	function handleInput(event) {
		setValue(event.target.value);
	}
	return (
		<div className={className + '_inputDiv'}>
			<div className={className + '_inputLabel'}>
				{icon && <FontAwesomeIcon icon={icon} className="FontAwesomeIcon" />}
				<div style={{width: '6px'}}></div>
				<label>{label}:</label>
			</div>
			<input {...inputAttributes}
				type={type}
				onChange={handleInput}>					
			</input>
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	setValue: PropTypes.func.isRequired,
	icon: PropTypes.any,
	inputAttributes: PropTypes.object
}

Input.defaultProps = {
	label: "",
	type: "",
	className: "",
	value: "",
	setValue: () => {}
}
