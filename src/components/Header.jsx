import * as React from "react";
import styled from "styled-components";

import { githubUrl, linkedinUrl } from "./SocialLinks";

import headerImg from "../assets/header.jpg";
import githubMark from "../assets/github-mark.png";
import linkedinMark from "../assets/linkedin-mark.png";

export const StyledHeader = styled.header`
  font-family: "Ubuntu", sans-serif;
  height: 100vh;
  padding: 1rem;
  margin: 0 0 3rem 0;
  color: rgba(255, 255, 255, 1) !important;
  text-shadow: 0px 0px 3px #000, -1px -1px #000, 1px 1px #000;

  background-color: black;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-areas: "brand" "contact";
  grid-gap: 1rem;

  .brand-area {
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
  }

  .contact-area {
    grid-area: contact;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    a {
      padding: 0 1rem;
    }
  }
`;

export class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      collapsed: true
    };
  }

  toggle = () => this.setState(prev => ({ collapsed: !prev.collapsed }));

  render() {
    return (
      <StyledHeader>
        <div className="brand-area">
          <div>
            <h1 className="text-uppercase">Greg Wilson</h1>
            <h2>Software Developer</h2>
          </div>
        </div>
        <div className="contact-area">
          <a href={githubUrl} target="_blank">
            <img src={githubMark} alt="GitHub" />
          </a>
          <a href={linkedinUrl} target="_blank">
            <img src={linkedinMark} alt="LinkedIn" />
          </a>
        </div>
      </StyledHeader>
    );
  }
}
