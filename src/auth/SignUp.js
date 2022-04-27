import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loader } from './Loader';
import { registeredUser } from '../redux/thunk';
import { Form, Title, Input, Button } from './Login';

export const SignUp = () => {
  const isRegistrated = useSelector((state) => state.authorized);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
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

  const dispatch = useDispatch();

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

  const newUser = { username, email, password, birthday };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registeredUser(newUser));
  };

  if (isRegistrated) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <div>{loading && <Loader />}</div>
      <Form onSubmit={handleSubmit}>
        <Title>Registration</Title>
        {usernameDirty && usernameError && (
          <div style={{ color: 'red' }}>{usernameError}</div>
        )}
        <Input
          type="text"
          placeholder="Enter your userName"
          name="username"
          onBlur={blurHandler}
          onChange={createUserName}
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
          onBlur={blurHandler}
          onChange={createUserEmail}
          value={email}
          required
        />
        <Input
          type="date"
          placeholder="Enter your Birthday"
          name="birthday"
          onBlur={blurHandler}
          onChange={createUserBirthday}
          value={birthday}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: 'red' }}>{passwordError}</div>
        )}
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          onBlur={blurHandler}
          onChange={createUserPassword}
          value={password}
          required
        />
        <Input
          type="password"
          placeholder="Repeat password"
          name="confirmPassword"
          onBlur={blurHandler}
          onChange={repeatUserPassword}
          value={confirmPassword}
          required
        />
        <span style={{ color: 'red' }}>{error}</span>
        <Button disabled={!password || password != confirmPassword}>
          SignUp
        </Button>
      </Form>
    </div>
  );
};
