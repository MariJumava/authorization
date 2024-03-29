import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/redux';
import {
  EditUserName,
  EditUserEmail,
  EditUserPassword,
} from '../../../redux/user/UserReducer';
import { SubTitle } from '../../../styles/title';
import { ButtonPrimary } from '../../../styles/buttons';
import { baseTheme } from '../../../styles/baseTheme';
import { device } from '../../../styles/device';

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled(SubTitle)`
  width: auto;
  font-size: ${baseTheme.fontSize.subtitle}px;
  @media ${device.tablet} {
    margin: 20px;
  }
`;
const Input = styled.input`
  height: 30px;
  font-size: ${baseTheme.fontSize.list}px;
  border: solid 1px #dcdcdc;
  border-radius: 7px;
  color: ${baseTheme.colors.dimGray};
`;
const Button = styled(ButtonPrimary)`
  width: 100px;
  height: 40px;
  font-size: ${baseTheme.fontSize.list}px;
`;

export const UserSettings = () => {
  const { user } = useAppSelector((state) => state.user);
  const [isEditView, setIsEditView] = useState<boolean>(false);
  const [editableName, setEditableName] = useState<string>(user.username);
  const [editableEmail, setEditableEmail] = useState<string>(user.email);
  const [editablePassword, setEditablePassword] = useState<string>(
    user.password
  );

  const dispatch = useAppDispatch();

  const showEditView = (): void => {
    setIsEditView(true);
  };

  const saveChanges = (): void => {
    setIsEditView(false);
    dispatch(EditUserName(editableName));
    dispatch(EditUserEmail(editableEmail));
    dispatch(EditUserPassword(editablePassword));
  };

  return (
    <Wrap>
      <div>
        <Title>Your Name:</Title>
        {isEditView && (
          <Input
            type="text"
            value={editableName}
            onChange={(event) => setEditableName(event.target.value)}
          />
        )}
        {!isEditView && <Title>{user.username}</Title>}
      </div>
      <div>
        <Title>Your Email:</Title>
        {isEditView && (
          <Input
            type="email"
            value={editableEmail}
            onChange={(event) => setEditableEmail(event.target.value)}
          />
        )}
        {!isEditView && <Title>{user.email}</Title>}
      </div>
      <div>
        <Title>Your Password:</Title>
        {isEditView && (
          <Input
            type="password"
            value={editablePassword}
            onChange={(event) => setEditablePassword(event.target.value)}
          />
        )}
        {!isEditView && <Title>{user.password}</Title>}
      </div>
      {isEditView && <Button onClick={saveChanges}>Save</Button>}
      {!isEditView && <Button onClick={showEditView}>Edit</Button>}
    </Wrap>
  );
};
