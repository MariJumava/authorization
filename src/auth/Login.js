import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { PATH } from '../utils/ROUTES';
import { Loader } from './Loader';
import { loginUser } from '../redux/thunk';
import login from '../pictures/login.png';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  margin: auto;
  padding: 40px;
  text-align: center;
  background: ${(props) => (props.primary ? '#1e77ff' : '#7b68ee')};
  border-radius: 20px;
`;
export const Container = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: fit-content;
  max-width: 700px;
`;
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 800;
  cursor: default;
`;
export const Text = styled.span`
  cursor: default;
`;
export const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid #808080;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const Button = styled.button`
  height: 40px;
  width: 200px;
  margin: 20px 0;
  font-size: 17px;
  font-weight: 600;
  color: black;
  background: ${(props) => (props.primary ? '#ff0c00e0' : '#00c4d1')};
  border-radius: 20px;
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
    return <Navigate to={'/profile'} />;
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
    <Container>
      <Img src={login} />
      <Wrap>
        <div>{loading && <Loader />}</div>
        <form onSubmit={handleSubmit}>
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
          <div>
            <input type="checkbox" checked={checked} onChange={userRemember} />
            &nbsp;<Text>Remember me</Text>
          </div>
          <span style={{ color: 'red' }}>{error}</span>
          <Button type="submit">Login</Button>
          <div>
            <NavLink to={PATH.PASSWORDRECOVERY}>Forgot Password?</NavLink>
            &nbsp;<Text>or</Text>&nbsp;
            <NavLink to={PATH.REGISTRATION}>Sign Up!</NavLink>
          </div>
        </form>
      </Wrap>
    </Container>
  );
};
