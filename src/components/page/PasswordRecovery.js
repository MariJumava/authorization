//import { useDispatch } from 'react-redux';
import { Form, Title, Input, Button } from '../../auth/Login';

export const PasswordRecovery = () => {
  //const dispatch = useDispatch();

  const sendMail = (e) => {
    e.preventDefault();
    //const email = e.target.email.value;
    //dispatch(passwordRecovery(email));
  };

  return (
    <Form onSubmit={sendMail}>
      <Title>Reset Password </Title>
      <Input name="email" placeholder="Enter a spare email" />
      <span>
        Please enter your email address so that we will send you a link to reset
        your password.
      </span>
      <Button>Send</Button>
    </Form>
  );
};
