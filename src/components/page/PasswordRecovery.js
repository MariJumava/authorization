import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATH } from '../../utils/ROUTES';
import { Loader } from '../../auth/Loader';
import { compareEmail } from '../../redux/thunk';
import forgot from '../../pictures/forgot.jpeg';
import { Wrap, Title, Input, Button, Container, Img } from '../../auth/Login';

export const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const loading = useSelector((state) => state.loading);
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
      <Img src={forgot} />
      <Wrap primary>
        <div>{loading && <Loader />}</div>
        <form>
          <Title>Reset Password </Title>
          <Input
            name="email"
            placeholder="Enter a spare email"
            onChange={handlerChange}
          />
          {showChangePassword ? (
            <Input name="password" placeholder="Enter new password" />
          ) : null}
          <p>
            Please enter your email address so that we will send you a link to
            reset your password.
          </p>
          {showChangePassword ? (
            <Button onClick={saveChanges}>Save new password</Button>
          ) : (
            <Button onClick={sendMail}>Send</Button>
          )}
          <p style={{ color: 'red' }}>{error}</p>
        </form>
        <NavLink to={PATH.LOGIN}>Back to login</NavLink>
      </Wrap>
    </Container>
  );
};
