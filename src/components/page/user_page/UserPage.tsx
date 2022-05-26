import { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserSettings } from './UserSettings';
import { device } from '../../../styles/device';
import { baseTheme } from '../../../styles/baseTheme';
import { UserPlants } from './UserPlants';
import { plants } from 'components/Plants';
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
  flex-direction: column;
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
export const SubTitle = styled.h4`
  margin-left: 10px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  color: ${baseTheme.colors.white};
  cursor: pointer;
`;
const ImgUser = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;
const Menu = styled.div`
  display: flex;
  margin: auto;
`;

export const UserPage = () => {
  const { authorized, user } = useAppSelector((state) => state.user);
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false);

  if (!authorized) {
    return <Navigate to={'/login'} />;
  }

  const showMyPlants = (): void => {
    setShowUserSettings(false);
  };

  const showSettings = (): void => {
    setShowUserSettings(true);
  };

  return (
    <Wrap>
      <Container>
        <ImgUser src={user.img.user_photo} />
        <Menu>
          <SubTitle onClick={showSettings}>My settings</SubTitle>
          <SubTitle onClick={showMyPlants}>My plants</SubTitle>
        </Menu>
        <div>
          <Wrapper>{showUserSettings ? <UserSettings /> : null}</Wrapper>
          <WrapSettings>
            {showUserSettings
              ? null
              : plants.map((plant) => {
                  return <UserPlants plant={plant} key={plant.id} />;
                })}
          </WrapSettings>
        </div>
      </Container>
    </Wrap>
  );
};
