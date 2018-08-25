import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from './Header';
import { Bio } from './Bio';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    box-shadow: 0 0.5rem 2rem #2b2b2b;
  }
`;

export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      theme: {
        mediaBreak: {
          sm: '768px'
        }
      }
    };
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledHomePage>
          <Header />
          <Bio />
          <Projects />
          <Contact />
        </StyledHomePage>
      </ThemeProvider>
    );
  }
}