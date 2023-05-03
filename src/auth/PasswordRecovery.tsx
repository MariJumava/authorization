import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../utils/ROUTES';
import { useAppDispatch, useAppSelector } from '../redux/redux';
import { compareEmail } from '../redux/thunk';
import {
  Container,
  ImgRectangle,
  ImgEllipse,
  Wrap,
  WrapForm,
  WrapHi,
  Form,
  Title,
  Text,
  Input,
  Button,
} from './Login';
import ellipse from '../pictures/login/ellipse.png';
import rectangle from '../pictures/login/rectangle.png';

export const PasswordRecovery = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const error = useAppSelector((state) => state.user.error);
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  const sendMail = (event: SyntheticEvent): void => {
    event.preventDefault();
    setShowChangePassword(true);
    dispatch(compareEmail(email));
  };
  const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const saveChanges = (): void => {
    setShowChangePassword(false);
  };

  return (
    <Container>
      <ImgRectangle src={rectangle} />
      <ImgEllipse src={ellipse} />
      <Wrap>
        <WrapForm>
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
        </WrapForm>
        <WrapHi>
          <Title>Hello Friend!</Title>
          <Text>
            Enter your personal details and start your journey with us
          </Text>
          <Button>
            <NavLink to={PATH.LOGIN} style={{ color: 'white' }}>
              Back to login
            </NavLink>
          </Button>
        </WrapHi>
      </Wrap>
    </Container>
  );
};
