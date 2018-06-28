import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

import { Header } from './Header';
import { Bio } from './Bio';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Analytics } from '../analytics/Analytics';

export const StyledApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    box-shadow: 0 0.5rem 2rem #2b2b2b;
  }
`;

export class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initialized: false,
      theme: {
        mediaBreak: {
          sm: '768px'
        }
      }
    };
  }

  componentWillMount() {
    if (!this.state.initialized) {
      ReactGA.initialize('UA-121572014-1');
      this.setState({ initialized: true });
    }
  }

  render() {
    return (
      <Analytics>
        <ThemeProvider theme={this.state.theme}>
          <StyledApp>
            <Header />
            <Bio />
            <Projects />
            <Contact />
          </StyledApp>
        </ThemeProvider>
      </Analytics>
    );
  }
}
