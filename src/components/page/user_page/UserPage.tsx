import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { logout, loginFailure } from '../../../redux/user/UserReducer';
import { ButtonLogout, ButtonSecondary } from '../../../styles/buttons';
import { UserSettings } from './UserSettings';
import { device } from '../../../styles/device';
import { baseTheme } from '../../../styles/baseTheme';
import { UserPlants } from './UserPlants';
import profile from '../../../pictures/profile/profile.jpg';

const Wrap = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${profile});
  background-size: cover;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
  }
`;
const WrapSettings = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  margin: 150px 0;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  @media ${device.tablet} {
    width: 85%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SubTitle = styled(ButtonSecondary)`
  width: 150px;
  height: 40px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  cursor: pointer;
`;
const ImgUser = styled.img`
  width: 80px;
  height: 80px;
  padding: 10px;
`;

export const UserPage = () => {
  const { user } = useAppSelector((state) => state.user);
  const userPlants = useAppSelector((state) => state.user.user.myplants);
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false);

  const showMyPlants = (): void => {
    setShowUserSettings(false);
  };

  const showSettings = (): void => {
    setShowUserSettings(true);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = (): void => {
    dispatch(logout());
    dispatch(loginFailure(''));
    localStorage.clear();
    navigate('/login');
  };
  console.log(userPlants);
  return (
    <Wrap>
      <Container>
        <Header>
          <ImgUser src={user.img.user_photo} />
          <ButtonLogout onClick={handleLogOut}>LogOut</ButtonLogout>
        </Header>
        <WrapSettings>
          <SubTitle onClick={showMyPlants}>My plants</SubTitle>
          <SubTitle onClick={showSettings}>My settings</SubTitle>
        </WrapSettings>
        <div>
          {showUserSettings
            ? null
            : userPlants?.map((plant) => {
                return <UserPlants key={plant.id} plant={plant} />;
              })}
        </div>
        <div>{showUserSettings ? <UserSettings /> : null}</div>
      </Container>
    </Wrap>
  );
};
