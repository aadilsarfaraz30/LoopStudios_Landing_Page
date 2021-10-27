import React from 'react';
import styled from 'styled-components';
import interactive from '../../assets/desktop/image-interactive.jpg';
import deepEarth from '../../assets/desktop/image-deep-earth.jpg';
import deepEarthMobile from '../../assets/mobile/image-deep-earth.jpg';
import nightArcade from '../../assets/desktop/image-night-arcade.jpg';
import nightArcadeMobile from '../../assets/mobile/image-night-arcade.jpg';
import soccerTeam from '../../assets/desktop/image-soccer-team.jpg';
import soccerTeamMobile from '../../assets/mobile/image-soccer-team.jpg';
import theGrid from '../../assets/desktop/image-grid.jpg';
import theGridMobile from '../../assets/mobile/image-grid.jpg';
import fromAbove from '../../assets/desktop/image-from-above.jpg';
import fromAboveMobile from '../../assets/mobile/image-from-above.jpg';
import pocketBorealis from '../../assets/desktop/image-pocket-borealis.jpg';
import pocketBorealisMobile from '../../assets/mobile/image-pocket-borealis.jpg';
import curiosity from '../../assets/desktop/image-curiosity.jpg';
import curiosityMobile from '../../assets/mobile/image-curiosity.jpg';
import fishEye from '../../assets/desktop/image-fisheye.jpg';
import fishEyeMobile from '../../assets/mobile/image-fisheye.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

const Content = () => {
  const [show, setShow] = useState(false);

  const seeAll = () => {
    setShow(!show);
  };
  return (
    <Container>
      <TopSection>
        {/* <Image> */}
        <TopSectionContent>
          <Fade left>
            <img src={interactive} alt='Interactive' />
          </Fade>

          <Article>
            <Fade right>
              <>
                <ArticleTitle>
                  <span>THE LEADER IN </span>
                  <span>INTERACTIVE VR</span>
                </ArticleTitle>
                <ArticleDescription>
                  <p>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                  </p>
                </ArticleDescription>
              </>
            </Fade>
          </Article>
        </TopSectionContent>
      </TopSection>
      <BottomSection>
        <Heading>
          <Title>OUR CREATIONS</Title>
          <Button onClick={seeAll}>{show ? 'Show Less' : 'Show More'}</Button>
        </Heading>
        <Fade top>
          <Gallery>
            <Item>
              <source media='(min-width:768px)' srcset={deepEarth} />
              <source media='(max-width:425px)' srcset={deepEarthMobile} />
              <img src={deepEarth} alt='IfItDoesntMatchAnyMedia' />
              <span>DEEP EARTH</span>
            </Item>
            <Item>
              <source media='(min-width:768px)' srcset={nightArcade} />
              <source media='(max-width:425px)' srcset={nightArcadeMobile} />
              <img src={nightArcade} alt='IfItDoesntMatchAnyMedia' />
              <span>NIGHT ARCADE</span>
            </Item>
            <Item>
              <source media='(min-width:768px)' srcset={soccerTeam} />
              <source media='(max-width:425px)' srcset={soccerTeamMobile} />
              <img src={soccerTeam} alt='IfItDoesntMatchAnyMedia' />
              <span>SOCCER TEAM VR</span>
            </Item>
            <Item>
              <source media='(min-width:768px)' srcset={theGrid} />
              <source media='(max-width:425px)' srcset={theGridMobile} />
              <img src={theGrid} alt='IfItDoesntMatchAnyMedia' />
              <span>THE GRID</span>
            </Item>
            {show ? (
              <>
                <Item>
                  <source media='(min-width:768px)' srcset={fromAbove} />
                  <source media='(max-width:425px)' srcset={fromAboveMobile} />
                  <img src={fromAbove} alt='IfItDoesntMatchAnyMedia' />
                  <span>FROM UP ABOVE VR</span>
                </Item>
                <Item>
                  <source media='(min-width:768px)' srcset={pocketBorealis} />
                  <source
                    media='(max-width:425px)'
                    srcset={pocketBorealisMobile}
                  />
                  <img src={pocketBorealis} alt='IfItDoesntMatchAnyMedia' />
                  <span>POCKET BOREALIS</span>
                </Item>
                <Item>
                  <source media='(min-width:768px)' srcset={curiosity} />
                  <source media='(max-width:425px)' srcset={curiosityMobile} />
                  <img src={curiosity} alt='IfItDoesntMatchAnyMedia' />
                  <span>THE CURIOSITY</span>
                </Item>
                <Item>
                  <source media='(min-width:768px)' srcset={fishEye} />
                  <source media='(max-width:425px)' srcset={fishEyeMobile} />
                  <img src={fishEye} alt='IfItDoesntMatchAnyMedia' />
                  <span>MAKE IT FISHEYE</span>
                </Item>
              </>
            ) : null}
          </Gallery>
        </Fade>
        <ButtonBottom onClick={seeAll}>
          {show ? 'Show Less' : 'Show More'}
        </ButtonBottom>
      </BottomSection>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  height: auto;
`;

const TopSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopSectionContent = styled.div`
  padding: 0;
  width: 80%;
  height: auto;
  display: flex;
  position: relative;
  z-index: 0;
  align-items: flex-end;
  img {
    width: 55%;
  }
  @media (max-width: 786px) {
    img {
      width: 300px;
    }
    height: 70%;
    flex-direction: column;
    position: static;
    align-items: center;
    justify-content: center;
  }
`;

const Article = styled.div`
  width: 60%;
  background: white;
  height: 70%;
  box-sizing: border-box;
  position: absolute;
  right: 1%;
  z-index: 1;
  padding: 40px 30px 20px 70px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 786px) {
    padding: 0;
    position: static;

    align-items: center;
    margin-top: 50px;
  }
  @media (max-width: 425px) {
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const ArticleTitle = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  span {
    font-size: 40px;
    font-weigth: 400;
  }
  @media (max-width: 1024px) {
    span {
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const ArticleDescription = styled.div`
  p {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    p {
      margin-top: 10px;
    }
  }
`;

const BottomSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Heading = styled.div`
  margin-top: 20px;

  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;
  color: black;
`;

const Button = styled.button`
  padding: 10px 40px;
  border: 1px solid black;
  background: none;
  :hover {
    background: black;
    cursor: pointer;
    color: white;
  }

  letter-spacing: 3px;

  @media (max-width: 425px) {
    display: none;
  }
`;
const ButtonBottom = styled.button`
  padding: 10px 40px;
  border: 1px solid black;
  background: none;
  letter-spacing: 3px;
  :hover {
    background: black;
    cursor: pointer;
    color: white;
  }
  @media (min-width: 426px) {
    display: none;
  }
`;
const Gallery = styled.div`
  width: 90%;
  height: auto;

  margin:auto;
  grid-gap: 30px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  place-items: center;
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    
  }
  
}
`;

const Item = styled.picture`
  width: 100%;
  font-size: 30px;
  position: relative;
  img {
    width: 100%;
  }
  span {
    position: absolute;
    top: 70%;
    left: 10%;
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
  }
  img:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media (max-width: 425px) {
    img {
      width: 100%;

      margin-bottom: 40px;
    }
    span {
      top: 50%;
      left: 2%;
    }
  }
`;
