import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PATH } from '../../utils/ROUTES';
// import main1 from '../../pictures/main1.png';
// import main2 from '../../pictures/main2.jpeg';
// import main3 from '../../pictures/main3.jpeg';
// import main4 from '../../pictures/main4.jpeg';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;
const Nav = styled.nav`
  margin: 30px;
`;
const Container = styled.div`
  padding: 40px;
`;
const Div = styled.div`
  margin: 80px 0;
`;
const Title = styled.h2`
  margin: auto;
  font-size: 35px;
`;
const SubTitle = styled.h4`
  font-size: 25px;
`;
const Text = styled.p``;
// const Img = styled.img`
//   width: 300px;
// `;

export const HomePage = () => {
  const isAuthorized = useSelector((state) => state.authorized);

  return (
    <Nav>
      {!isAuthorized ? (
        <NavLink to={PATH.LOGIN}>Have a profile? Login!</NavLink>
      ) : null}
      <Wrap>
        <Container>
          <Title>About us</Title>
          <SubTitle>Our mission</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            tempus viverra augue ac elit. Interdum libero at tristique fames
            faucibus. Massa a, consectetur et viverra vulputate urna enim felis
            metus. Consequat morbi cras elit mauris phasellus at fames eget.
            Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque.
            Erat platea augue sed amet, tempor, sed sollicitudin. Viverra
            tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas
            elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac,
            pharetra nisi, morbi maecenas facilisi.
          </Text>
          <Div>
            {/* <Img src={main1} />
            <Img src={main2} /> */}
          </Div>
        </Container>
        <Container>
          <Div>
            {/* <Img src={main3} />
            <Img src={main4} /> */}
          </Div>
          <SubTitle>Our mission</SubTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            tempus viverra augue ac elit. Interdum libero at tristique fames
            faucibus. Massa a, consectetur et viverra vulputate urna enim felis
            metus. Consequat morbi cras elit mauris phasellus at fames eget.
            Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque.
            Erat platea augue sed amet, tempor, sed sollicitudin. Viverra
            tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas
            elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac,
            pharetra nisi, morbi maecenas facilisi.
          </Text>
        </Container>
      </Wrap>
    </Nav>
  );
};
