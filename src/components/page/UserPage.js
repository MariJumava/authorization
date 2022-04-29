import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  EditUserName,
  EditUserEmail,
  EditUserPassword,
} from '../../redux/action';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import edit from '../../pictures/edit.png';
import profile from '../../pictures/profile.png';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  margin-left: 70px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ImgBackground = styled.img`
  width: fit-content;
  max-width: 700px;
`;
const Title = styled.h2`
  font-size: 35px;
`;
const SubTitle = styled.h4`
  margin: 0;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
`;
const Text = styled.p`
  margin: 0;
  padding: 10px;
  font-weight: 300;
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  height: 30px;
  font-size: 17px;
  border: solid 1px #dcdcdc;
  border-radius: 7px;
  color: #696969;
`;
const Button = styled.button`
  width: 70px;
  margin: 10px auto;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ImgEdit = styled.img`
  width: 20px;
`;
const Img = styled.img`
  width: 80px;
  margin-right: 100px;
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
      <div>
        <Title>Personal information</Title>
        <Wrapper>
          <Img src={user.img} />
          <Info>
            <Container>
              <SubTitle>Your Name:</SubTitle>
              {isEditView && (
                <Input
                  type="text"
                  value={editableName}
                  onChange={(event) => setEditableName(event.target.value)}
                />
              )}
              {!isEditView && <Text>{user.username}</Text>}
            </Container>
            <Container>
              <SubTitle>Your Email:</SubTitle>
              {isEditView && (
                <Input
                  type="email"
                  value={editableEmail}
                  onChange={(event) => setEditableEmail(event.target.value)}
                />
              )}
              {!isEditView && <Text>{user.email}</Text>}
            </Container>
            <Container>
              <SubTitle>Your Password:</SubTitle>
              {isEditView && (
                <Input
                  type="password"
                  value={editablePassword}
                  onChange={(event) => setEditablePassword(event.target.value)}
                />
              )}
              {!isEditView && <Text>{user.password}</Text>}
            </Container>
            {isEditView && (
              <Button onClick={saveChanges}>
                <BeenhereIcon />
              </Button>
            )}
            {!isEditView && (
              <Button onClick={showEditView}>
                <ImgEdit src={edit} />
              </Button>
            )}
          </Info>
        </Wrapper>
      </div>
      <ImgBackground src={profile} />
    </Wrap>
  );
};
