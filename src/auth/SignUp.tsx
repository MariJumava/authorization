import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { loginFailure } from '../redux/user/UserAction';
import { registeredUser, loginUser } from '../redux/thunk';
import {
  Container,
  ImgRectangle,
  ImgEllipse,
  Wrap,
  WrapForm,
  WrapHi,
  Title,
  Input,
  Button,
  Text,
  Social,
  Form,
  CastomInput,
  Img,
  Error,
} from './Login';
import ellipse from '../pictures/login/ellipse.png';
import rectangle from '../pictures/login/rectangle.png';
import mail from '../pictures/login/mail.svg';
import lock from '../pictures/login/lock.svg';
import user from '../pictures/login/user.svg';

export const SignUp = () => {
  const isRegistrated = useSelector((state) => state.authorized);
  const error = useSelector((state) => state.error);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    } else {
      setPasswordError('');
    }
  };

  const repeatUserPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const navigate = useNavigate();
  const transitionSignIn = () => {
    navigate('/login');
    dispatch(loginFailure(''));
  };
  const newUser = { username, email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      await dispatch(registeredUser(newUser));
      const data = {
        email: newUser.email,
        password: newUser.password,
      };
      await dispatch(loginUser(data));
    })();
    if (username === '') {
      setUsernameError('Name cannot be empty');
    } else if (email === '') {
      setEmailError('Email cannot be empty');
    } else if (password === '') {
      setPasswordError('Password cannot be empty');
    } else {
      dispatch(registeredUser(newUser));
    }
  };

  if (isRegistrated) {
    return <Navigate to={'/'} />;
  }

  return (
    <Container>
      <ImgRectangle src={rectangle} />
      <ImgEllipse src={ellipse} />
      <Wrap>
        <WrapHi>
          <Title>Welcome Back!</Title>
          <Text>
            To keep connected with us plase login with your personal info
          </Text>
          <Button onClick={transitionSignIn}>Sign in</Button>
        </WrapHi>
        <WrapForm>
          <Form onSubmit={handleSubmit}>
            <Title primary>Create Account</Title>
            <Social>
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </Social>
            <Text primary>or use your email for registration</Text>
            {usernameError && <Error>{usernameError}</Error>}
            <CastomInput>
              <Img src={user} />
              <Input
                type="text"
                placeholder="Name"
                name="username"
                onChange={createUserName}
                value={username}
                required
              />
              {emailError && <Error>{emailError}</Error>}
            </CastomInput>
            <CastomInput>
              <Img src={mail} />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={createUserEmail}
                value={email}
                required
              />
              {passwordError && <Error>{passwordError}</Error>}
            </CastomInput>
            <CastomInput>
              <Img src={lock} />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={createUserPassword}
                value={password}
                required
              />
            </CastomInput>
            <CastomInput>
              <Img src={lock} />
              <Input
                type="password"
                placeholder="Repeat password"
                name="confirmPassword"
                onChange={repeatUserPassword}
                value={confirmPassword}
                required
              />
            </CastomInput>
            <Error>{error}</Error>
            <Button primary disabled={!password || password != confirmPassword}>
              SignUp
            </Button>
          </Form>
        </WrapForm>
      </Wrap>
    </Container>
  );
};
