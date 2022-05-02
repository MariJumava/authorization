import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PATH } from '../utils/ROUTES';
import { Loader } from './Loader';
import { loginUser } from '../redux/thunk';
import ellipse from '../pictures/ellipse.png';
import rectangle from '../pictures/rectangle.png';
import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  width: 737px;
  height: 466px;
  left: 32px;
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
  position: absolute;
  width: 429px;
  height: 466px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border-radius: 10px;
`;
export const Wrapper2 = styled.div`
  position: absolute;
  width: 308px;
  height: 466px;
  right: 0;
  top: 0;
  background: #06a67e;
  border-radius: 0 10px 10px 0;
  animation: slideIn 1.5s;
  @keyframes slideIn {
    from {
      transform: translateX(20%);
    }
    to {
      transform: translateX(-150%);
    }
  }
`;

export const Social = styled.div`
  display: flex;
  position: absolute;
  left: 176px;
  top: 144px;
`;
export const Title = styled.h3`
  position: absolute;
  left: 70px;
  top: 70px;
  margin: auto;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  letter-spacing: 1.5px;
  color: ${(props) => (props.primary ? '#38b593' : '#FFFFFF')};
  cursor: default;
`;
export const Title2 = styled.h3`
  position: absolute;
  left: 70px;
  top: 126px;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  letter-spacing: 1.5px;
  color: #ffffff;
  cursor: default;
`;
export const Text = styled.p`
  position: absolute;
  left: 149px;
  top: 178px;
  font-size: 11px;
  text-align: center;
  color: #9a9a9a;
  cursor: default;
`;
export const SubTitle = styled.h5`
  position: absolute;
  width: 198px;
  left: 59px;
  top: 191px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  cursor: default;
`;
export const InputEmail = styled.input`
  position: absolute;
  width: 242px;
  height: 36px;
  left: 94px;
  top: 222px;
  border: none;
  background: #f4f8f5;
`;
export const InputPas = styled.input`
  position: absolute;
  width: 242px;
  height: 36px;
  left: 94px;
  top: 266px;
  border: none;
  background: #f4f8f5;
`;
const Forgot = styled.a`
  position: absolute;
  width: 92px;
  height: 14px;
  left: 169px;
  top: 318px;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  text-decoration-line: underline;
  color: #373737;
`;
export const Button1 = styled.button`
  position: absolute;
  width: 158px;
  height: 39px;
  left: 136px;
  top: 348px;
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
  color: #ffffff;
  background: #38b593;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
export const Button2 = styled.button`
  position: absolute;
  width: 158px;
  height: 39px;
  left: 84.8px;
  top: 289px;
  font-size: 10px;
  text-transform: uppercase;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
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
          <form onSubmit={handleSubmit}>
            <Title primary>Sign In to Your Account</Title>
            <Social>
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </Social>
            <Text primary>use your email account</Text>
            {emailDirty && emailError && (
              <div style={{ color: 'red' }}>{emailError}</div>
            )}
            <InputEmail
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
            <InputPas
              type="password"
              placeholder="Password"
              name="password"
              onBlur={blurHandler}
              onChange={userPassword}
              value={password}
            />
            <Forgot>
              <NavLink to={PATH.PASSWORDRECOVERY}>Forgot Password?</NavLink>
            </Forgot>
            <Button1 type="submit">Sign in</Button1>
            <span style={{ color: 'red' }}>{error}</span>
          </form>
        </Wrapper1>
        <Wrapper2>
          <Title2>Hello Friend!</Title2>
          <SubTitle>
            Enter your personal details and start your journey with us
          </SubTitle>
          <Button2>
            <NavLink to={PATH.REGISTRATION} style={{ color: 'white' }}>
              Sign Up
            </NavLink>
          </Button2>
        </Wrapper2>
      </Wrap>
    </Container>
  );
};
