import React ,{useState, useEffect}from "react";
import {
  ProfileSkills,
  TheProfile,
  ProfileTitle,
  ProfileList,
  ProfileItem,
  ProfileSpan,
  Skills,
  SkillsTitle,
  SkillsBar,
  SkillsDesc,
  Percentage,
  Parent,
  Child
} from "./style";
import axios from "axios";

const Profile = () => {

  const [allSkills , setAllAkills] =useState([])

  useEffect(()=>{
    axios.get("/js/data.json").then(response=>{
      setAllAkills(response.data.skills)
    })
  },[])

  const mySkills  = allSkills.map((skillItem,index)=>{
    return(

      <SkillsBar key={index}>
      <skillTitle>{skillItem.name}</skillTitle>
    <Percentage>{skillItem.percent}</Percentage>
      <Parent>
        <Child theWidth={skillItem.percent}></Child>
      </Parent>
    </SkillsBar>

    )
  })


  return (
    <ProfileSkills>
      <div class="container">
        <TheProfile>
          <ProfileTitle>
            <span>My </span>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem >
              <ProfileSpan>Name</ProfileSpan>
              Hamza Nabil
            </ProfileItem>
            <ProfileItem >
              <ProfileSpan>Birthday</ProfileSpan>
              21/1/1996
            </ProfileItem>
            <ProfileItem >
              <ProfileSpan>Address</ProfileSpan>
              Ain shams
            </ProfileItem>
            <ProfileItem >
              <ProfileSpan>Phone</ProfileSpan>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem >
              <ProfileSpan>Email</ProfileSpan>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem >
              <ProfileSpan>Website</ProfileSpan>
              <span class="web">www.google.com</span>
            </ProfileItem>
          </ProfileList>
        </TheProfile>

        <Skills>
          <SkillsTitle>
            Some <span>skills</span>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {mySkills}
      
  
        </Skills>
      </div>
    </ProfileSkills>
  );
};

export default Profile;
