import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATH } from '../../utils/ROUTES';
import { compareEmail } from '../../redux/thunk';
import {
  Container,
  ImgRectangle,
  ImgEllipse,
  Wrap,
  Wrapper1,
  Wrapper2,
  Title,
  Title2,
  InputEmail,
  InputPas,
  SubTitle,
  Button1,
  Button2,
} from '../../auth/Login';
import ellipse from '../../pictures/ellipse.png';
import rectangle from '../../pictures/rectangle.png';
import styled from '@emotion/styled';

const Text = styled.p`
  position: absolute;
  left: 68px;
  top: 129px;
  width: 250px;
  font-size: 14px;
  text-align: center;
  color: #9a9a9a;
  cursor: default;
`;

export const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const error = useSelector((state) => state.error);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    setShowChangePassword(true);
    console.log(email);
    dispatch(compareEmail(email));
  };
  const handlerChange = (e) => {
    setEmail(e.target.value);
  };

  const saveChanges = () => {
    setShowChangePassword(false);
  };

  return (
    <Container>
      <ImgRectangle src={rectangle} />
      <ImgEllipse src={ellipse} />
      <Wrap>
        <Wrapper1>
          <form>
            <Title primary>Reset Password </Title>
            <Text>
              Please enter your email address so that we will send you a link to
              reset your password.
            </Text>
            <InputEmail
              name="email"
              placeholder="Enter a spare email"
              onChange={handlerChange}
            />
            {showChangePassword ? (
              <InputPas name="password" placeholder="Enter new password" />
            ) : null}
            {showChangePassword ? (
              <Button1 onClick={saveChanges}>Save new password</Button1>
            ) : (
              <Button1 onClick={sendMail}>Send</Button1>
            )}
            <p style={{ color: 'red' }}>{error}</p>
          </form>
        </Wrapper1>
        <Wrapper2>
          <Title2>Hello Friend!</Title2>
          <SubTitle>
            Enter your personal details and start your journey with us
          </SubTitle>
          <Button2>
            <NavLink to={PATH.LOGIN} style={{ color: 'white' }}>
              Back to login
            </NavLink>
          </Button2>
        </Wrapper2>
      </Wrap>
    </Container>
  );
};
