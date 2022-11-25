import React from "react";
import styled from "styled-components";
// import NumberCard from '../UI card/NumberCard'
import Skill from "./skills";

const About = () => {
  return (
    <MainContainer>
      <div className="contentWrapper">
        <div className="ContentTitle">
          <h4>About Me</h4>
          {/* <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p> */}
        </div>
        <div className="MainContent">
          <div className="Flex1">
            <h2>Get to know me!</h2>
            <p>
              <span>Hi!</span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sapiente soluta rerum quos quasi odit provident nisi
              delectus libero, perferendis aliquid asperiores ducimus numquam
              deserunt amet eos repudiandae ex tempore. Ex obcaecati repellendus
              iste dolorem aliquid similique et, eos velit perferendis
              doloremque aspernatur laboriosam quisquam cupiditate vero tempora,
              necessitatibus aliquam perspiciatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta rerum quos quasi odit provident nisi delectus libero,
              perferendis aliquid asperiores ducimus numquam deserunt amet eos
              repudiandae ex tempore. Ex obcaecati repellendus iste dolorem
              aliquid similique et, eos velit perferendis doloremque aspernatur
              laboriosam quisquam cupiditate vero tempora, necessitatibus
              aliquam perspiciatis.
            </p>
          </div>
          <div className="Flex2">
            <Skill />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;

  .contentWrapper {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 90%;
    height: max-content;
    margin: 4rem auto;
    gap: 8rem;
  }
  .ContentTitle {
    margin-bottom: 0;
  }

  h4 {
    text-align: center;
    font-size: 2.7rem;
    font-weight: 700;
  }

  .MainContent {
    display: flex;
    gap: 6rem;
    margin-top: -5rem;
  }
  .Flex1 {
    flex-basis: 50%;

    p {
      color: #f5f5e9;
      max-width: 60rem;
      font-size: 1.3rem;
      font-weight: 200;
      margin-bottom: 1.5rem;
      line-height: 1.6em;
    }
  }
  .Flex2 {
    flex-basis: 50%;
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  span {
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    .MainContent {
      display: flex;
      flex-flow: column;

      p {
        font-size:1.5rem;
        font-weight: 300;
      }
    }
  }
`;

export default About;
