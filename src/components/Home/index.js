import React from "react";
import {HomeSection,InformationSection,Title,Info,Description, Span ,Button} from './style'

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <InformationSection>
          <Title>Ahmed Said</Title>
          <Info>Creative Director</Info>
          <Description>
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </Description>
          <Button class="home-btn">Let's Begin</Button>
        </InformationSection>
      </div>
    </HomeSection>
  );
};

export default Home;
