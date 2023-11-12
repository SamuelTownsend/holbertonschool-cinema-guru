import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

const Register = ({ username, password, setUsername, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='LoginRegister'>
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
        <Button type="submit" label="Register" />
      </div>
    </form>
  );
};

export default Register;
