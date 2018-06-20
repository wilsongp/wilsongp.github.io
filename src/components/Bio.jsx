import React from "react";
import styled from "styled-components";

import glamImg from "../assets/glam.png";
import { StyledSection } from "./Section";

export const StyledBio = styled(StyledSection).attrs({
  className: "align-items-center"
})`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  div {
    text-align: center;
    max-height: 100%;
  }

  img {
    max-width: 50%;
  }
`;

export class Bio extends React.Component {
  render() {
    return (
      <StyledBio>
        <div className="row">
          <div className="col-md-7 order-2 order-md-1 d-flex">
            <blockquote className="blockquote align-self-center">
              <p>
                I'm Greg; a software developer with a lifelong love of learning
                and food. Whether professionally or for fun, I'm driven by a
                desire to learn and improve myself through new experiences and
                learning from others.
              </p>
              <p className="mb-0">
                When not hacking away at a keyboard, you can find me making a
                mess in the kitchen; pushing my love of sweets onto anyone
                within reach.
              </p>
            </blockquote>
          </div>
          <div className="col-md-5 order-1 order-md-2">
            <img src={glamImg} alt="Glam Shot" />
          </div>
        </div>
      </StyledBio>
    );
  }
}
