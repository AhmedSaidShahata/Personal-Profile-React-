import React, { Component } from "react";

import {
  WorkSection,
  WorkTitle,
  Part,
  PartTitle,
  WorkIcon,
  Line,
  WorkDescription,
  WorkSpan,
} from "./style";

import axios from "axios";

class Work extends React.Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((response) => {
      this.setState({
        works: response.data.works,
      });
      console.log(response.data.works);
    });
  }

  render() {

    const {works} = this.state
   const allWorks=works.map((workItem,index)=>{
      return(
        <Part key={index} first={index+1} part={workItem.id}>
        <WorkIcon className={workItem.icon_name}></WorkIcon>
        <PartTitle>{workItem.title}</PartTitle>
        <Line />
        <WorkDescription>{workItem.body}</WorkDescription>
      </Part>
      )

    })

    return (
      <PartTitle>
        <div class="container">
          <WorkTitle>
            <WorkSpan>My</WorkSpan> Work
          </WorkTitle>
          {allWorks}

        </div>
      </PartTitle>
    );
  }
}

export default Work;
