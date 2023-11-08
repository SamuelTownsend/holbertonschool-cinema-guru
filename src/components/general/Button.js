import "./general.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
	label,
	className,
	onClick,
	icon
}) {
	return (
		<div className={className + '_button'}>
			<button	onClick={onClick}>
					{icon && <FontAwesomeIcon icon={icon} />}
					<label>{label}</label>
			</button>
		</div>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.any
}

Button.defaultProps = {
	label: "",
	className: "",
	onClick: () => {}
}
