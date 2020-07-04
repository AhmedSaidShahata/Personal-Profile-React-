import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Portfolio,
  PortfolioImage,
  PortfolioItem,
  PortfolioList,
  PortfolioOverlay,
  PortfolioTitle,
  PortfolioSpan,
  WrapperIamge,
  SpanOverlay,
} from "./style";

const Portofolio = () => {
  const [Imgss , setImgs ] =useState([])

  useEffect(()=>{
    axios.get("js/data.json").then(response=>{
      setImgs(response.data.portfolio)
    })
  },[])

  const PortofolioIamges = Imgss.map((imageItem, index) => {
    return (
      <WrapperIamge>
        <PortfolioImage src={imageItem.image} alt=" " />
        <PortfolioOverlay>
          <SpanOverlay>Show Image</SpanOverlay>
        </PortfolioOverlay>
      </WrapperIamge>
    );
  });

  return (
    <Portfolio>
      <PortfolioTitle>
        <PortfolioSpan>My</PortfolioSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      {PortofolioIamges}
    </Portfolio>
  );
};

export default Portofolio;
