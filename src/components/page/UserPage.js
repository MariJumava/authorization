import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  EditUserName,
  EditUserEmail,
  EditUserPassword,
} from '../../redux/action';
import profile from '../../pictures/profile/profile.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;
const Img = styled.img`
  max-width: 1440px;
  min-width: 375px;
  object-fit: fill;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 800px;
  height: 350px;
  left: 22%;
  top: 170px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 12px;
`;
const SubTitle = styled.h4`
  font-size: 20px;
  color: #ffffff;
`;
const Text = styled.p`
  font-size: 20px;
  color: #ffffff;
`;
const Input = styled.input`
  height: 30px;
  font-size: 17px;
  border: solid 1px #dcdcdc;
  border-radius: 7px;
  color: #696969;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(127, 202, 33, 0.8) 0%, #105200 100%);
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
`;
const ImgUser = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

export const UserPage = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const user = useSelector((state) => state.user);
  const [isEditView, setIsEditView] = useState(false);
  const [editableName, setEditableName] = useState(user.username);
  const [editableEmail, setEditableEmail] = useState(user.email);
  const [editablePassword, setEditablePassword] = useState(user.password);

  const dispatch = useDispatch();

  const showEditView = () => {
    setIsEditView(true);
  };

  const saveChanges = () => {
    setIsEditView(false);
    dispatch(EditUserName(editableName));
    dispatch(EditUserEmail(editableEmail));
    dispatch(EditUserPassword(editablePassword));
  };
  if (!isAuthorized) {
    return <Navigate to={'/login'} />;
  }

  return (
    <>
      <Img src={profile} />
      <Container>
        <ImgUser src={user.img} />
        <Wrapper>
          <div>
            <SubTitle>Your Name:</SubTitle>
            {isEditView && (
              <Input
                type="text"
                value={editableName}
                onChange={(event) => setEditableName(event.target.value)}
              />
            )}
            {!isEditView && <Text>{user.username}</Text>}
          </div>
          <div>
            <SubTitle>Your Email:</SubTitle>
            {isEditView && (
              <Input
                type="email"
                value={editableEmail}
                onChange={(event) => setEditableEmail(event.target.value)}
              />
            )}
            {!isEditView && <Text>{user.email}</Text>}
          </div>
          <div>
            <SubTitle>Your Password:</SubTitle>
            {isEditView && (
              <Input
                type="password"
                value={editablePassword}
                onChange={(event) => setEditablePassword(event.target.value)}
              />
            )}
            {!isEditView && <Text>{user.password}</Text>}
          </div>
          {isEditView && <Button onClick={saveChanges}>Save</Button>}
          {!isEditView && <Button onClick={showEditView}>Edit</Button>}
        </Wrapper>
      </Container>
    </>
  );
};
