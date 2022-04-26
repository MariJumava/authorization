import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { PATH } from '../utils/ROUTES';
import { Loader } from './Loader';
import { loginUser } from '../redux/thunk';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  margin: 50px auto;
  padding: 50px;
  background: #dcdcdc;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
export const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
  cursor: default;
`;
export const Input = styled.input`
  width: 270px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const Button = styled.button`
  height: 40px;
  width: 200px;
  margin: 20px 0;
  font-size: 15px;
  background: #808080;
  border-radius: 10px;
  border: none;
`;

export const Login = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [passwordError, setPasswordError] = useState(
    'Password cannot be empty'
  );

  const dispatch = useDispatch();

  const userEmail = (e) => {
    setEmail(e.target.value);
    const re = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  const userPassword = (e) => {
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

  const userRemember = () => {
    setChecked(!checked);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/user'} state={{ from: location }} />;
  }

  const data = { email, password, checked };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
    setEmail('');
    setPassword('');
    setChecked(false);
  };

  return (
    <>
      <div>{loading && <Loader />}</div>
      <Form onSubmit={handleSubmit}>
        <Title>Login Page</Title>
        {emailDirty && emailError && (
          <div style={{ color: 'red' }}>{emailError}</div>
        )}
        <Input
          type="text"
          placeholder="Enter your email"
          name="email"
          onBlur={blurHandler}
          onChange={userEmail}
          value={email}
        />
        {passwordDirty && passwordError && (
          <div style={{ color: 'red' }}>{passwordError}</div>
        )}

        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          onBlur={blurHandler}
          onChange={userPassword}
          value={password}
        />
        <span>
          <input type="checkbox" checked={checked} onChange={userRemember} />
          &nbsp;<span>Remember me</span>
        </span>
        <span style={{ color: 'red' }}>{error}</span>
        <Button type="submit">Login</Button>
        <div>
          <NavLink to={PATH.PASSWORDRECOVERY}>Forgot Password?</NavLink>
          &nbsp;<span>or</span>&nbsp;
          <NavLink to={PATH.REGISTRATION}>Sign Up!</NavLink>
        </div>
      </Form>
    </>
  );
};
