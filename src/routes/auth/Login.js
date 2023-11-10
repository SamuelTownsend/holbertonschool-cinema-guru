import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import './auth.css'
const Login = ({ username, password, setUsername, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div classname="Username">
        <Input
        
          type="text"
          label="Username"
          value={username}
          setValue={setUsername}
        />
      </div>
      <Input
        type="password"
        label="Password"
        value={password}
        setValue={setPassword}
      />
      <Button type="submit" label="Login" />
    </form>
  );
};

export default Login;
