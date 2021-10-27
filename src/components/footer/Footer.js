import React from 'react';
import styled from 'styled-components';
import { data } from '../data/data';
import logo from '../../assets/logo.svg';
import fb from '../../assets/icon-facebook.svg';
import ig from '../../assets/icon-instagram.svg';
import twi from '../../assets/icon-twitter.svg';
import pin from '../../assets/icon-pinterest.svg';

const Footer = () => {
  return (
    <Container>
      <Right>
        <Logo>
          <img src={logo} alt='Logo' />
        </Logo>
        <Navbar>
          <ul>
            {data.map((item) => {
              return <li>{item.text}</li>;
            })}
          </ul>
        </Navbar>
      </Right>
      <Left>
        <Icons>
          <Icon>
            <img src={fb} alt='facebook' />
          </Icon>
          <Icon>
            <img src={twi} alt='twitter' />
          </Icon>
          <Icon>
            <img src={pin} alt='pinterest' />
          </Icon>
          <Icon>
            <img src={ig} alt='instagram' />
          </Icon>
        </Icons>
        <CopyRight>
          <span>&copy; 2021 Loopstudios. All rigths reserved.</span>
        </CopyRight>
      </Left>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 50px;
  background: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;

  color: white;
  @media (max-width: 425px) {
    height: auto;
    flex-direction: column;
  }
`;

const Right = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
  margin-bottom: 25px;
  @media (max-width: 425px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Navbar = styled.nav`
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    font-size: 100%;
  }
  li:hover {
    padding-bottom: 5px;
    cursor: pointer;
    text-align: center;
    border-bottom-style: solid;
  }
  @media (max-width: 425px) {
    ul {
      flex-direction: column;
    }
    li {
      margin: 8px 0;
    }
    margin-bottom: 30px;
  }
`;
const Left = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 425px) {
    align-items: center;
    width: 100%;
  }
`;
const Icons = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 25px;
  @media (max-width: 425px) {
    width: 70%;
    justify-content: center;
  }
`;
const Icon = styled.section`
  width: 10%;

  img {
    width: 50%;
  }
  :hover {
    padding-bottom: 5px;
    cursor: pointer;
    text-align: center;
    border-bottom-style: solid;
  }
  @media (max-width: 425px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
const CopyRight = styled.section`
  margin-right: 20px;

  @media (max-width: 425px) {
    width: 100%;
    padding-bottom: 60px;
    margin-right: 0;
    text-align: center;
  }
`;
