import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PATH } from '../utils/ROUTES';
import { Loader } from './Loader';
import { loginFailure } from '../redux/user/UserAction';
import { loginUser } from '../redux/thunk';
import { IStore, IUser } from '../redux/user/UserReducer';
import { device } from '../styles/device';
import { baseTheme } from '../styles/baseTheme';
import mail from '../pictures/login/mail.svg';
import lock from '../pictures/login/lock.svg';
import ellipse from '../pictures/login/ellipse.png';
import rectangle from '../pictures/login/rectangle.png';
import { IUserFind } from '../redux/user/UserTypes';

export const Wrap = styled.div`
  display: flex;
  position: absolute;
  left: 35px;
  top: 70px;
  background: ${baseTheme.colors.white};
  border-radius: 10px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  margin: 50px auto;
  background: ${baseTheme.colors.cultured};
  @media ${device.tablet} {
    width: 100%;
    height: fit-content;
    margin: 0 auto;
  }
`;
export const ImgRectangle = styled.img`
  position: absolute;
  width: 310px;
  height: 390px;
  left: 490px;
  top: 0;
  @media ${device.tablet} {
    display: none;
  }
`;
export const ImgEllipse = styled.img`
  position: absolute;
  width: 270px;
  height: 270px;
  top: 330px;
  @media ${device.tablet} {
    display: none;
  }
`;
export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  border-radius: 10px;
  @media ${device.tablet} {
    margin-bottom: 15px;
  }
`;
export const WrapHi = styled.div`
  width: 310px;
  height: 465px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${baseTheme.colors.jungleGreen};
  border-radius: 10px;
  animation: slideIn 1.5s;
  @keyframes slideIn {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(-150%);
    }
  }
  @media ${device.tablet} {
    height: 200px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const Social = styled.div`
  display: flex;
`;
export const Title = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: ${baseTheme.fontSize.subtitle}px;
  margin: 16px;
  letter-spacing: 1.5px;
  color: ${(props) =>
    props.primary ? baseTheme.colors.jungleGreen : baseTheme.colors.white};
  cursor: default;
`;
export const Text = styled.p`
  margin: 16px;
  font-size: 11px;
  color: ${(props) =>
    props.primary ? baseTheme.colors.dimGray : baseTheme.colors.white};
  text-align: center;
  cursor: default;
`;
export const CastomInput = styled.div`
  position: relative;
`;
export const Img = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const Input = styled.input`
  width: 240px;
  height: 35px;
  margin-bottom: 8px;
  padding-left: 40px;
  border: none;
  background: ${baseTheme.colors.cultured};
`;
const Forgot = styled.div`
  height: 15px;
  margin: 8px 0;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.login}px;
  text-align: center;
  text-decoration-line: underline;
  color: ${baseTheme.colors.jet};
`;
export const Button = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.login}px;
  text-transform: uppercase;
  color: ${baseTheme.colors.white};
  background: ${(props) =>
    props.primary ? baseTheme.colors.jungleGreen : 'transparent'};
  border-radius: 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #FFFFFF')};
  cursor: pointer;
`;
export const Error = styled.div`
  width: 240px;
  text-align: center;
  color: ${baseTheme.colors.red};
`;

export const Login = () => {
  const isAuthorized = useSelector((state: IStore) => state.authorized);
  const loading = useSelector((state: IStore) => state.loading);
  const error = useSelector((state: IStore) => state.error);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const dispatch = useDispatch();

  const userEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  const userPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value < '3' || e.target.value > '10') {
      setPasswordError('Password must be between 3 and 10 characters');
    } else {
      setPasswordError('');
    }
  };

  const navigate = useNavigate();
  const transitionSignUp = () => {
    navigate('/signup');
    dispatch(loginFailure(''));
  };

  if (isAuthorized) {
    return <Navigate to={'/profile'} />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPassword('');
    if (email === '') {
      setEmailError('Email cannot be empty');
    } else if (password === '') {
      setPasswordError('Password cannot be empty');
    } else {
      dispatch(loginUser(email, password));
    }
  };

  return (
    <Container>
      <ImgRectangle src={rectangle} />
      <ImgEllipse src={ellipse} />
      <Wrap>
        <WrapForm>
          <div>{loading && <Loader />}</div>
          <Form onSubmit={handleSubmit}>
            <Title primary>Sign In to Your Account</Title>
            <Social>
              <a href="https://twitter.com/" target={'blank'}>
                <TwitterIcon />
              </a>
              <a href="https://facebook.com/" target={'blank'}>
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com/" target={'blank'}>
                <LinkedInIcon />
              </a>
            </Social>
            <Text primary>use your email account</Text>
            {emailError && <Error>{emailError}</Error>}
            <CastomInput>
              <Img src={mail} />
              <Input
                type="text"
                placeholder="Email"
                name="email"
                onChange={userEmail}
                value={email}
              />
              {passwordError && <Error>{passwordError}</Error>}
            </CastomInput>
            <CastomInput>
              <Img src={lock} />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={userPassword}
                value={password}
              />
            </CastomInput>
            <Forgot>
              <NavLink to={PATH.PASSWORDRECOVERY}>Forgot Password?</NavLink>
            </Forgot>
            <Error>{error}</Error>
            <Button primary type="submit">
              Sign in
            </Button>
          </Form>
        </WrapForm>
        <WrapHi>
          <Title>Hello Friend!</Title>
          <Text>
            Enter your personal details and start your journey with us
          </Text>
          <Button onClick={transitionSignUp}>Sign Up</Button>
        </WrapHi>
      </Wrap>
    </Container>
  );
};
