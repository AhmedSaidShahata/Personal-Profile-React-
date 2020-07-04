import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Socialmedia,
  Social,
  SocialIcon,
  SocialDesc,
  SocialDescSpan,
  SocialDescSpan2,
} from "./style";
const SocialMedia = () => {
  const [allSocial, setAllSocial] = useState([]);
  useEffect(() => {
    axios.get("/js/data.json").then((response) => {
      setAllSocial(response.data.social);
    });
  }, []);

  const theSocial = allSocial.map((socialItem, index) => {
    return(
    <Social bgColor={index+1}>
      <SocialIcon className={socialItem.icon}></SocialIcon>
      <SocialDesc>
        <SocialDescSpan> {socialItem.title}</SocialDescSpan>
        <SocialDescSpan2> {socialItem.body}</SocialDescSpan2>
      </SocialDesc>
    </Social>
    );
  });

  return <Socialmedia>{theSocial}</Socialmedia>;
};

export default SocialMedia;
