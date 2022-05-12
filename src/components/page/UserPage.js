import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  EditUserName,
  EditUserEmail,
  EditUserPassword,
} from '../../redux/action';
import { ButtonPrimary } from '../../styles/buttons';
import { baseTheme } from '../../styles/baseTheme';
import profile from '../../pictures/profile/profile.jpg';
import styled from 'styled-components';

const Wrap = styled.div`
  min-width: 375px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${profile});
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  height: 350px;
  margin: 150px 0;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 85%;
  }
`;
const SubTitle = styled.h4`
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  color: ${baseTheme.colors.primary};
`;
const Input = styled.input`
  height: 30px;
  font-size: ${baseTheme.fontSize.list}px;
  border: solid 1px #dcdcdc;
  border-radius: 7px;
  color: ${baseTheme.colors.input};
`;
const Button = styled(ButtonPrimary)`
  width: 100px;
  height: 40px;
  font-size: ${baseTheme.fontSize.list}px;
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
    <Wrap>
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
            {!isEditView && <SubTitle>{user.username}</SubTitle>}
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
            {!isEditView && <SubTitle>{user.email}</SubTitle>}
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
            {!isEditView && <SubTitle>{user.password}</SubTitle>}
          </div>
          {isEditView && <Button onClick={saveChanges}>Save</Button>}
          {!isEditView && <Button onClick={showEditView}>Edit</Button>}
        </Wrapper>
      </Container>
    </Wrap>
  );
};
