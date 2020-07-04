import React from "react";
import { Link } from "react-router-dom";



import {NavbarSection  , Container , Logo ,LogoText , UlList, LiItem , Anchor} from './style'

const Navbar = () => {
  return (
   <NavbarSection>
            
      <Container>
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>

          
          <UlList>
              <LiItem><Link to ="/">Home</Link></LiItem>
              <LiItem><Anchor href="#">Work</Anchor></LiItem>
              <LiItem><Anchor href="#">Portfolio</Anchor></LiItem>
              <LiItem><Anchor href="#">Resume</Anchor></LiItem>
              <LiItem><Anchor href="#">About</Anchor></LiItem>
              <LiItem><Link  to="/contact">Contact</Link></LiItem>
          </UlList>
          
      </Container>
    
    </NavbarSection>
  );
};

export default Navbar;
