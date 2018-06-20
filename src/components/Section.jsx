import * as React from "react";
import styled from "styled-components";

export const StyledSection = styled.section.attrs({
  className: props => props.className || "container-fluid"
})`
  height: auto;
  min-height: 20rem;
  padding: 3rem;
  font-size: 1.5rem;
  ${props => (props.shadow ? "box-shadow: 0 0 3rem #2b2b2b;" : "")};

  @media (max-width: ${({ theme }) => theme.mediaBreak.sm}) {
    height: 100vh;
  }
`;

export const Section = ({ children, ...props }) => (
  <StyledSection {...props}>{children}</StyledSection>
);

export default Section;
