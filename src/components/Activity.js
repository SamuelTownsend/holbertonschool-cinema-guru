import './components.css';
import PropTypes from 'prop-types';

export default function Activity({
	activity
}) {
	return (
		<li className="Activity">
			<p>
				<b>{activity.user.name}</b> {activity.action} 
				<b>{activity.subject.name}</b> to <b>{activity.object.name}</b> - 
				{activity.create_at}
			</p>
		</li>
	);
}

Activity.propTypes = {
	activity: PropTypes.object.isRequired
}

Activity.defaultProps = {
	activity: {}
}
