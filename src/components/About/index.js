import React from "react";

import {TheAbout, CreativeInfo,CreativeTitle,TitleSpan,InfoDir,InfoDesc,InfoDescAnchor} from './style'

const About = () => {
  return (

    <TheAbout>
            <div class="container">
                <CreativeInfo>
                    <CreativeTitle><TitleSpan>This is</TitleSpan> Me</CreativeTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescAnchor href="#">explicabo</InfoDescAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </TheAbout>
  )
};

export default About;
