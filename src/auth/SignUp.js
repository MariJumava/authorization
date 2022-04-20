import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  margin: 100px auto;
  padding: 50px;
  background: #dcdcdc;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const Input = styled.input`
  width: 270px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Button = styled.button`
  height: 40px;
  width: 200px;
  margin: 20px 0;
  background: #808080;
  border-radius: 10px;
  border: none;
`;

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [usernameError, setUsernameError] = useState(
    'User name cannot be empty'
  );
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [passwordError, setPasswordError] = useState(
    'Password cannot be empty'
  );
  const [registrated, setRegistrated] = useState(false);

  const createUserName = (e) => {
    setUsername(e.target.value);
    const nameCheck = /^[A-Za-z0-9]$/;
    if (!nameCheck) {
      setUsernameError('Incorrect user name');
    } else {
      setUsernameError('');
    }
  };

  const createUserBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const createUserEmail = (e) => {
    setEmail(e.target.value);
    const re = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  const createUserPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value < 3 || e.target.value > 10) {
      setPasswordError(
        'Password must be longer than 3 and not more than 10 characters'
      );
      if (!e.target.value) {
        setPasswordError('Password cannot be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const repeatUserPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsernameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('OK');
    } else {
      console.log('NO');
    }
    setRegistrated(true);
  };

  if (registrated) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      <Form>
        <div>Register</div>
        {usernameDirty && usernameError && (
          <div style={{ color: 'red' }}>{usernameError}</div>
        )}
        <Input
          type="text"
          placeholder="Enter your userName"
          name="username"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => createUserName(e)}
          value={username}
          required
        />
        {emailDirty && emailError && (
          <div style={{ color: 'red' }}>{emailError}</div>
        )}
        <Input
          type="text"
          placeholder="Enter your email"
          name="email"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => createUserEmail(e)}
          value={email}
          required
        />
        <Input
          type="date"
          placeholder="Enter your Birthday"
          name="birthday"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => createUserBirthday(e)}
          value={birthday}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: 'red' }}>{passwordError}</div>
        )}
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => createUserPassword(e)}
          value={password}
          required
        />
        <Input
          type="password"
          placeholder="Repeat password"
          name="confirmPassword"
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => repeatUserPassword(e)}
          value={confirmPassword}
          required
        />
        <Button disabled={!password} onClick={handleSubmit}>
          SignUp
        </Button>
      </Form>
    </div>
  );
};
