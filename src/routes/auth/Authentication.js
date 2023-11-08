import "./auth.css";
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import PropTypes from 'prop-types';
import Register from './Register';
import { useState } from 'react';
import ls from 'local-storage';

export default function Authentication({
	setIsLoggedIn,
	setUserUsername
}) {
	const [_switch, set_switch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSwitch(value) {
		set_switch(value);
	}

	console.log(_switch)

	axios.post('http://localhost:8000/api/auth/register', {
		username,
		password
	}).then((response) => {
		ls.set('accessToken', response.data.accessToken)
	})

	axios.post('http://localhost:8000/api/auth/login', {
		username,
		password
	}).then((response) => {
		ls.set('accessToken', response.data.accessToken)
	})

	function handleSubmit(e) {
		e.preventDefault();
		if (_switch) {
			axios.post("http://localhost:8000/api/auth/login", {
				username,
				password
			})
			.then((response) => {
				if (response.data.accessToken) {
					ls.set("accessToken", response.data.accessToken);
					setIsLoggedIn(true);
					setUserUsername(username);
				}
			})
			.catch(error => {
				console.error(error);
			});
		} else {
			axios.post("http://localhost:8000/api/auth/register", {
				username,
				password
			})
			.then((response) => {
				if (response.data.accessToken) {
					ls.set("accessToken", response.data.accessToken);
					setIsLoggedIn(true);
					setUserUsername(username);
				}
			})
			.catch(error => {
				console.error(error);
			});
		}
	}

	return (
		<div className="Authentication">
			<form className="SignInUpForm"
				onSubmit={handleSubmit}
				id="authForm">
				<div className="SignInUpDiv">
					<Button 
						label='Sign In'
						className={_switch ? "active" : "inactive"}
						onClick={(e) => {
							e.preventDefault();
							handleSwitch(true);
						}} />
					<Button 
						label='Sign Up'
						className={!_switch ? "active" : "inactive"}
						onClick={(e) => {
							e.preventDefault();
							handleSwitch(false);
						}} />
				</div>
				<div className="LoginRegisterForm">
						{_switch &&
							<Login
								username={username}
								password={password}
								setUsername={setUsername}
								setPassword={setPassword} />
						}
						{!_switch &&
							<Register
								username={username}
								password={password}
								setUsername={setUsername}
								setPassword={setPassword} />
						}
				</div>
			</form>
		</div>
	)
}

Authentication.propTypes = {
	setIsLoggedIn: PropTypes.func.isRequired,
	setUserUsername: PropTypes.func.isRequired
}

Authentication.defaultProps = {
	setIsLoggedIn: () => {},
	setUserUsername: () => {}
}
