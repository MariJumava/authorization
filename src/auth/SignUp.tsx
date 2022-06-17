import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Loader } from './Loader';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { loginFailure } from '../redux/user/UserReducer';
import { registeredUser } from '../redux/thunk';
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
  const { error, isRegistrated, loading } = useAppSelector(
    (state) => state.user
  );
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const dispatch = useAppDispatch();

  const createUserName = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
    const nameCheck = /^[A-Za-z0-9]$/;
    if (!nameCheck) {
      setUsernameError('Incorrect user name');
    } else {
      setUsernameError('');
    }
  };

  const createUserEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    const re = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    if (!re.test(String(event.target.value).toLocaleLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  const createUserPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (event.target.value.length < 3 || event.target.value.length > 10) {
      setPasswordError('Password must be between 3 and 10 characters');
    } else {
      setPasswordError('');
    }
  };

  const repeatUserPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate();
  const transitionSignIn = (): void => {
    navigate('/login');
    dispatch(loginFailure(''));
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    (async () => {
      dispatch(registeredUser());
    })();
    if (username === '') {
      setUsernameError('Name cannot be empty');
    } else if (email === '') {
      setEmailError('Email cannot be empty');
    } else if (password === '') {
      setPasswordError('Password cannot be empty');
    } else {
      dispatch(registeredUser());
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
          <div>{loading && <Loader />}</div>
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
            <Button
              primary
              disabled={!password || password !== confirmPassword}
            >
              SignUp
            </Button>
          </Form>
        </WrapForm>
      </Wrap>
    </Container>
  );
};
