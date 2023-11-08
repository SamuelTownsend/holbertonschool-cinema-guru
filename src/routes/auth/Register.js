import './auth.css';
import Button from '../../components/general/Button';
import { faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input';
import PropTypes from 'prop-types';

export default function Login({
	username,
	password,
	setUsername,
	setPassword
}) {
	return (
		<div className='LoginRegister'>
			<h3>Sign in with your account</h3>
			<Input
				type='text'
				label="Username"
				value={username}
				icon={faUser}
				setValue={setUsername} />
			<Input
				type='password'
				label="Password"
				value={password}
				icon={faKey}
				setValue={setPassword} />
			<Button 
				label="Sign Up"
				icon={faPlus}
				className="submitButton"
				onClick={() => {
					const findForm = document.getElementById("authForm");
					findForm.submit();
				}
			} />
		</div>
	)
}

Login.propTypes = {
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	setUsername: PropTypes.func.isRequired,
	setPassword: PropTypes.func.isRequired
}

Login.defaultProps = {
	username: '',
	password: '',
	setUsername: () => {},
	setPassword: () => {}
}
