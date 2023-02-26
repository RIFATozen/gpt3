import React from "react";
import "./brand.css";
import { shopify, google, atlassian, dropbox, slack } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="googleImage" />
      </div>
      <div>
        <img src={slack} alt="slackImage" />
      </div>
      <div>
        <img src={atlassian} alt="atlassianImage" />
      </div>
      <div>
        <img src={dropbox} alt="dropboxImage" />
      </div>
      <div>
        <img src={shopify} alt="shopifyImage" />
      </div>
    </div>
  );
};

export default Brand;
