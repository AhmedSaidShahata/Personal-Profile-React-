import styled from 'styled-components'

export const Socialmedia = styled.div`
height: auto;
overflow: hidden;
`

export const Social = styled.div`
width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background:${props=>props.bgColor==1 ? "#3b5998" : ""};
background:${props=>props.bgColor==2 ? "#498cbf" : ""};
background:${props=>props.bgColor==3 ? "#cc2127" : ""};
`


// .social-media .social.face {
//     background: #3b5998;
// }

// .social-media .social.twitter {
//     background: #498cbf;
// }

// .social-media .social.pin {
//     background: #cc2127;
// }


export  const SocialIcon = styled.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px
` 

export const SocialDesc = styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff
`


export const SocialDescSpan = styled.span`
display: block;
margin-bottom: 8px
`



export const SocialDescSpan2 = styled(SocialDescSpan)` 
    font-weight: normal
`
