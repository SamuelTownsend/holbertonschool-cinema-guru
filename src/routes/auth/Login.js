import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import './auth.css'
const Login = ({ username, password, setUsername, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="LoginRegister">
        <h2>Please login</h2>
        <Input
        
          type="text"
          label="Username"
          value={username}
          setValue={setUsername}
        />
      
      <Input
        type="password"
        label="Password"
        value={password}
        setValue={setPassword}
      />
      <Button type="submit" label="Login" />
      </div>
    </form>
  );
};

export default Login;
