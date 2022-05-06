import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PATH } from '../utils/ROUTES';
import { Loader } from './Loader';
import { loginFailure } from '../redux/action';
import { loginUser } from '../redux/thunk';
import mail from '../pictures/login/mail.svg';
import lock from '../pictures/login/lock.svg';
import ellipse from '../pictures/login/ellipse.png';
import rectangle from '../pictures/login/rectangle.png';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  position: absolute;
  left: 33px;
  top: 68px;
  background: #ffffff;
  border-radius: 10px;
`;
export const Container = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  margin: 50px auto;
  background: #f0f4f3;
`;
export const ImgRectangle = styled.img`
  position: absolute;
  width: 310.87px;
  height: 388.58px;
  left: 490.16px;
  top: 0;
`;
export const ImgEllipse = styled.img`
  position: absolute;
  width: 269px;
  height: 269px;
  top: 333px;
`;
export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 429px;
  border-radius: 10px;
`;
export const Wrapper2 = styled.div`
  width: 308px;
  height: 466px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #06a67e;
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
  font-size: 26px;
  margin: 16px;
  letter-spacing: 1.5px;
  color: ${(props) => (props.primary ? '#38b593' : '#FFFFFF')};
  cursor: default;
`;
export const Text = styled.p`
  margin: 16px;
  font-size: 11px;
  color: ${(props) => (props.primary ? ' #9a9a9a' : '#FFFFFF')};
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
  width: 242px;
  height: 36px;
  margin-bottom: 8px;
  padding-left: 40px;
  border: none;
  background: #f4f8f5;
`;
const Forgot = styled.div`
  height: 14px;
  margin: 8px 0;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  text-decoration-line: underline;
  color: #373737;
`;
export const Button = styled.button`
  width: 158px;
  height: 39px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
  color: #ffffff;
  background: ${(props) => (props.primary ? '#38b593' : 'transparent')};
  border-radius: 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #FFFFFF')};
  cursor: pointer;
`;

export const Login = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const navigate = useNavigate();
  const transitionSignUp = () => {
    navigate('/signup');
    dispatch(loginFailure(''));
  };

  if (isAuthorized) {
    return <Navigate to={'/profile'} />;
  }

  const data = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <ImgRectangle src={rectangle} />
      <ImgEllipse src={ellipse} />
      <Wrap>
        <Wrapper1>
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
            {emailDirty && emailError && (
              <div style={{ color: 'red' }}>{emailError}</div>
            )}
            <CastomInput>
              <Img src={mail} />
              <Input
                type="text"
                placeholder="Email"
                name="email"
                onBlur={blurHandler}
                onChange={userEmail}
                value={email}
              />
              {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
            </CastomInput>
            <CastomInput>
              <Img src={lock} />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onBlur={blurHandler}
                onChange={userPassword}
                value={password}
              />
            </CastomInput>
            <Forgot>
              <NavLink to={PATH.PASSWORDRECOVERY}>Forgot Password?</NavLink>
            </Forgot>
            <span style={{ color: 'red' }}>{error}</span>
            <Button primary type="submit">
              Sign in
            </Button>
          </Form>
        </Wrapper1>
        <Wrapper2>
          <Title>Hello Friend!</Title>
          <Text>
            Enter your personal details and start your journey with us
          </Text>
          <Button onClick={transitionSignUp}>Sign Up</Button>
        </Wrapper2>
      </Wrap>
    </Container>
  );
};
