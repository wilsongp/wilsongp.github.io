import React from "react";
import styled from "styled-components";

import { StyledSection } from "./Section";
import { EmailForm } from "./EmailForm";
import { SocialLinks } from "./SocialLinks";

export const StyledContact = styled(StyledSection).attrs({
  className: "text-center d-flex align-items-center"
})`
  position: relative; /* Position must be relative to absolutely position :after */
  background: #333; /* Background color to show effect */
  color: #fff;

  a {
    vertical-align: middle;
    img {
      width: 50%;
    }
  }

  :after {
    content: ""; /* Required to display content */
    position: absolute; /* Sets the position absolute to the top div */
    top: -1px;
    left: 50%;
    margin-left: -50px; /* Set margin equal to border px */
    width: 0;
    z-index: 1;
    height: 0;
    border-top: solid 50px #fff; /* Creates the notch */
    border-left: solid 50px transparent; /* Creates triangle effect */
    border-right: solid 50px transparent; /* Creates triangle effect */
  }
`;

export class Contact extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center display-3">Let's Chat!</h1>
        <StyledContact>
          <div className="container">
            <SocialLinks />
            <EmailForm />
          </div>
        </StyledContact>
      </React.Fragment>
    );
  }
}
