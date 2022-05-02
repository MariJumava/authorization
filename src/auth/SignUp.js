import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PATH } from '../utils/ROUTES';
//import { Loader } from './Loader';
import { registeredUser, loginUser } from '../redux/thunk';
import { Container, ImgRectangle, ImgEllipse, Wrap } from './Login';
import ellipse from '../pictures/ellipse.png';
import rectangle from '../pictures/rectangle.png';
import styled from '@emotion/styled';

const Wrapper1 = styled.div`
  position: absolute;
  width: 308px;
  height: 466px;
  left: 0px;
  top: 0px;
  border-radius: 10px 0 0 10px;
  background: #06a67e;
  animation: slideIn 1.5s;
  @keyframes slideIn {
    from {
      transform: translateX(150%);
    }
    to {
      transform: translateX(-20%);
    }
  }
`;
const Wrapper2 = styled.div`
  position: absolute;
  width: 429px;
  height: 466px;
  left: 308px;
  top: 0px;
  border-radius: 10px;
  background: #ffffff;
`;
const Title = styled.h3`
  position: absolute;
  left: 30px;
  top: 126px;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  letter-spacing: 1.5px;
  color: #ffffff;
  cursor: default;
`;
const TitleCreate = styled.h3`
  position: absolute;
  left: 99px;
  top: 32px;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  letter-spacing: 1.5px;
  color: #38b593;
  cursor: default;
`;
const Text = styled.p`
  position: absolute;
  left: 133px;
  top: 146px;
  font-size: 11px;
  text-align: center;
  color: #9a9a9a;
  cursor: default;
`;
const Social = styled.div`
  display: flex;
  position: absolute;
  left: 178px;
  top: 107px;
`;
const SubTitle = styled.h5`
  position: absolute;
  width: 212px;
  height: 34px;
  left: 56px;
  top: 193px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
`;
const InputName = styled.input`
  position: absolute;
  width: 242px;
  height: 36px;
  left: 94px;
  top: 194px;
  border: none;
  background: #f4f8f5;
`;
const InputEmail = styled.input`
  position: absolute;
  left: 94px;
  top: 238px;
  width: 242px;
  height: 36px;
  border: none;
  background: #f4f8f5;
`;
const InputPas = styled.input`
  position: absolute;
  left: 94px;
  top: 281px;
  width: 242px;
  height: 36px;
  border: none;
  background: #f4f8f5;
`;
const InputPasRepeat = styled.input`
  position: absolute;
  width: 242px;
  height: 36px;
  left: 94px;
  top: 325px;
  border: none;
  background: #f4f8f5;
`;
const Button1 = styled.button`
  position: absolute;
  left: 150px;
  top: 393px;
  width: 138px;
  height: 39px;
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
  color: #ffffff;
  background: #38b593;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
const Button2 = styled.button`
  position: absolute;
  left: 83px;
  top: 278px;
  width: 158px;
  height: 39px;
  font-size: 10px;
  text-transform: uppercase;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
`;
export const SignUp = () => {
  const isRegistrated = useSelector((state) => state.authorized);
  //const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
    dispatch(registeredUser(newUser));
  };

  if (isRegistrated) {
    return <Navigate to={'/'} />;
  }

  return (
    <Container>
      <ImgRectangle src={rectangle} />
      <ImgEllipse src={ellipse} />
      <Wrap>
        <Wrapper1>
          <Title>Welcome Back!</Title>
          <SubTitle>
            To keep connected with us plase login with your personal info
          </SubTitle>
          <Button2>
            <NavLink to={PATH.LOGIN} style={{ color: 'white' }}>
              Sign in
            </NavLink>
          </Button2>
        </Wrapper1>
        <Wrapper2>
          {/* <div>{loading && <Loader />}</div> */}
          <form onSubmit={handleSubmit}>
            <TitleCreate>Create Account</TitleCreate>
            <Social>
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </Social>
            <Text primary>or use your email for registration</Text>
            {usernameDirty && usernameError && (
              <div style={{ color: 'red' }}>{usernameError}</div>
            )}
            <InputName
              type="text"
              placeholder="Name"
              name="username"
              onBlur={blurHandler}
              onChange={createUserName}
              value={username}
              required
            />
            {emailDirty && emailError && (
              <div style={{ color: 'red' }}>{emailError}</div>
            )}
            <InputEmail
              type="email"
              placeholder="Email"
              name="email"
              onBlur={blurHandler}
              onChange={createUserEmail}
              value={email}
              required
            />
            {passwordDirty && passwordError && (
              <div style={{ color: 'red' }}>{passwordError}</div>
            )}
            <InputPas
              type="password"
              placeholder="Password"
              name="password"
              onBlur={blurHandler}
              onChange={createUserPassword}
              value={password}
              required
            />
            <InputPasRepeat
              type="password"
              placeholder="Repeat password"
              name="confirmPassword"
              onBlur={blurHandler}
              onChange={repeatUserPassword}
              value={confirmPassword}
              required
            />
            <span style={{ color: 'red' }}>{error}</span>
            <Button1
              primary
              disabled={!password || password != confirmPassword}
            >
              SignUp
            </Button1>
          </form>
        </Wrapper2>
      </Wrap>
    </Container>
  );
};
