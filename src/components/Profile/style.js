import styled from "styled-components";

export const ProfileSkills = styled.div`
  padding: 50px 0;

`;

export const TheProfile = styled.div`
  width: 50%;
  float: left;
`;

export const ProfileList = styled.ul`
  list-style: none;
`;

export const ProfileTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const ProfileItem = styled.li`
  margin-bottom: 8px;
`;
export const ProfileSpan = styled.span`
display: inline-block;
width: 100px;
font-weight: bold
color :${(props) => (props.web ? "#eb5424" : "")}

`;

export const Skills = styled.div`
  width: 50%;
  float: left;
 
`;

export const SkillsTitle = styled.h2``;

export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const SkillsBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const SkillTitle = styled.span`
  float: left;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const Percentage = styled.span`
  float: right;
  margin-right: 100px;
`;

export const Parent = styled.div`
  height: 2px;

  background: #f8f8f8;
  position: relative;
  top: 5px;
`;

export const Child = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => props.theWidth};
`;
