import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import styled from 'styled-components';
import {
  EditUserName,
  EditUserEmail,
  EditUserPassword,
} from '../../../redux/user/UserReducer';
import { SubTitle } from './UserPage';
import { ButtonPrimary } from '../../../styles/buttons';
import { baseTheme } from '../../../styles/baseTheme';

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
  const [editableName, setEditableName] = useState<any>(user.username);
  const [editableEmail, setEditableEmail] = useState<any>(user.email);
  const [editablePassword, setEditablePassword] = useState<any>(user.password);

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
    <>
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
    </>
  );
};
