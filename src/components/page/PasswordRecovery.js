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
  Form,
  Title,
  Text,
  Input,
  Button,
} from '../../auth/Login';
import ellipse from '../../pictures/login/ellipse.png';
import rectangle from '../../pictures/login/rectangle.png';

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
          <Form>
            <Title primary>Reset Password </Title>
            <Text primary>
              Please enter your email address so that we will send you a link to
              reset your password.
            </Text>
            <Input
              name="email"
              placeholder="Enter a spare email"
              onChange={handlerChange}
            />
            {showChangePassword ? (
              <Input name="password" placeholder="Enter new password" />
            ) : null}
            {showChangePassword ? (
              <Button primary onClick={saveChanges}>
                Save new password
              </Button>
            ) : (
              <Button primary onClick={sendMail}>
                Send
              </Button>
            )}
            <p style={{ color: 'red' }}>{error}</p>
          </Form>
        </Wrapper1>
        <Wrapper2>
          <Title>Hello Friend!</Title>
          <Text>
            Enter your personal details and start your journey with us
          </Text>
          <Button>
            <NavLink to={PATH.LOGIN} style={{ color: 'white' }}>
              Back to login
            </NavLink>
          </Button>
        </Wrapper2>
      </Wrap>
    </Container>
  );
};
