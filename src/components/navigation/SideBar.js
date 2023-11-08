import Activity from '../Activity';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
	const [selected, setSelected] = useState('home');
	const [small, setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setShowActivities] = useState(false);
	const navigate = useNavigate();

	function setPage(pageName) {
		setSelected(pageName);
	}

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		console.log(accessToken)
		axios.get('http://localhost:8000/api/activity', {
			headers: { Authorization: `Bearer ${accessToken}` }
		})
		.then((response) => {
			setActivities(response.data)
		});
	});

	/* Delete later */
	/* Delete later */

	return (
		<div className={`Sidebar${small ? "_small" : ""}`}
			onMouseEnter={() => {
				setSmall(false);
				setShowActivities(true);
			}}
			onMouseLeave={() => {
				setSmall(true);
				setShowActivities(false);}}>
				<div className='Pages'>
					<div className={`Home${selected === 'home' ? '_active' : ''}`}
						onClick={() => {
							setPage('home');
							navigate('/');}}>
						<div className='pageBlock'>
							<div className='pageIcon'>
								<FontAwesomeIcon icon={faFolder} />
							</div>
							{!small ? 
								<div className='pageDesc'>
									Home
								</div> : ''}
						</div>
					</div>
					<div className={`Favorites${selected === 'favorites' ? '_active' : ''}`}
						onClick={() => {
							setPage('favorites');
							navigate('/favorites');}}>
						<div className='pageBlock'>
							<div className='pageIcon'>
								<FontAwesomeIcon icon={faStar} />
							</div>
							{!small ? 
								<div className='pageDesc'>
									Favorites
								</div> : ''}
						</div>
					</div>
					<div className={`WatchLater${selected === 'watchLater' ? '_active' : ''}`}
						onClick={() => {
							setPage('watchLater');
							navigate('/watchlater');}}>
							<div className='pageBlock'>
								<div className='pageIcon'>
									<FontAwesomeIcon icon={faClock} />
								</div>
								{!small ? 
									<div className='pageDesc'>
										Watch Later
									</div> : ''}
						</div>
					</div>
				</div>
				{!small ?
					<div className='activitiesBlock'>
						<p className='latestHeader'>
						Latest Activities
						</p>
						<div className='activityList'>
							<ul className='activityItems'>
								{activities}
							</ul>
						</div>
					</div> : ''}
		</div>
	)
}
