import React, { useState } from 'react';
import styled from 'styled-components';
import hero from '../../assets/desktop/image-hero.jpg';
import heroMobile from '../../assets/mobile/image-hero.jpg';
import logo from '../../assets/logo.svg';
import { data } from '../data/data';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade';

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <Container>
      <Top>
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>
        <Navbar>
          <NavItems>
            <ul>
              {data.map((item) => {
                return <a href='#'>{item.text}</a>;
              })}
            </ul>
          </NavItems>
          <Menu>
            <MenuIcon onClick={() => setSideBar(true)} />
          </Menu>

          <SideBar show={sideBar}>
            <TopBar>
              <img src={logo} alt='logo' />

              <Close>
                <CloseIcon onClick={() => setSideBar(false)} />
              </Close>
            </TopBar>
            <BottomBar>
              <ul>
                {data.map((item) => {
                  return <a href='#'> {item.text}</a>;
                })}
              </ul>
            </BottomBar>
          </SideBar>
        </Navbar>
      </Top>
      <Content>
        <Fade left>
          <Main>
            <h1>IMMERSIVE EXPERIENCE THAT DELIVERS</h1>
          </Main>
        </Fade>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 425px) {
    background-image: url(${heroMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const Top = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
`;
// img {
//   width: 20%;
// }
// @media (max-width: 768px) {
//   justify-content: space-between;
//   img {
//     margin-left: 35px;
//   }
// }
// @media (max-width: 768px) {
//   img {
//     margin-left: 35px;
//   }
// }

const Logo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
  @media (max-width: 768px) {
    margin-left: 30px;
    justify-content: flex-start;
  }
  @media (max-width: 1024px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 425px) {
    img {
      width: 150px;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  width: 60%;
  justify-content: center;
  margin-right: 20px;
`;
const NavItems = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    list-style: none;
    font-size: 20px;
  }
  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    padding-bottom: 5px;
    cursor: pointer;
    text-align: center;
    border-bottom-style: solid;
  }
  @media (max-width: 700px) {
    a {
      display: none;
    }
  }
  @media (min-width: 1920px) {
    ul {
      font-size: 30px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: white;
  margin-right: 10px;
  .MuiSvgIcon-root {
    font-size: 40px;
  }
  @media (min-width: 701px) {
    display: none;
  }
  @media (max-width: 425px) {
    .MuiSvgIcon-root {
      font-size: 35px;
    }
  }
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  margin-left: 9%;
  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }
`;

const Main = styled.div`
  border: 1px solid white;
  width: 500px;
  height: auto;
  color: white;

  h1 {
    text-align: left;
    font-size: 50px;
    font-weight: 400;
    padding: 20px;
  }

  @media (max-width: 425px) {
    width: 300px;
    h1 {
      font-size: 40px;
    }
  }
`;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 100%;
  z-index: 16;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in;
`;

const TopBar = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 150px;
  }
`;

const Close = styled.div`
  .MuiSvgIcon-root {
    font-size: 35px;
  }
`;

const BottomBar = styled.div`
  width: 90%;

  ul {
    height: 250px;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  a {
    color: white;
    text-decoration: none;
    list-style: none;
    font-size: 22px;
  }
  a:hover {
    cursor: pointer;
    text-align: center;
    border-bottom-style: solid;
  }
`;
