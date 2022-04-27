import { NavLink } from 'react-router-dom';
import main_1 from '../../pictures/main_1.png';
import main_2 from '../../pictures/main_2.png';
import main_3 from '../../pictures/main_3.png';
import main_4 from '../../pictures/main_4.png';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 70px;
  display: flex;
`;
const Container = styled.div`
  padding: 23px;
`;
const Title = styled.h2`
  margin: auto;
  font-size: 35px;
`;
const SubTitle = styled.h4`
  font-size: 25px;
`;
const Text = styled.p`
  margin-bottom: 80px;
`;
const Img = styled.img`
  margin: 20px 10px 0;
  border-radius: 20px;
`;

export const HomePage = () => {
  return (
    <Wrap>
      <NavLink to="/login">Login</NavLink>
      <Container>
        <Title>About us</Title>
        <SubTitle>Our mission</SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          tempus viverra augue ac elit. Interdum libero at tristique fames
          faucibus. Massa a, consectetur et viverra vulputate urna enim felis
          metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc,
          at vitae integer morbi nibh dignissim non tempus pellentesque. Erat
          platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu
          nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi.
          Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi,
          morbi maecenas facilisi.
        </Text>
        <div>
          <Img src={main_1} />
          <Img src={main_2} />
        </div>
      </Container>
      <Container>
        <div>
          <Img src={main_3} />
          <Img src={main_4} />
        </div>
        <SubTitle>Our mission</SubTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          tempus viverra augue ac elit. Interdum libero at tristique fames
          faucibus. Massa a, consectetur et viverra vulputate urna enim felis
          metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc,
          at vitae integer morbi nibh dignissim non tempus pellentesque. Erat
          platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu
          nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi.
          Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi,
          morbi maecenas facilisi.
        </Text>
      </Container>
    </Wrap>
  );
};
