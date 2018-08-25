import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import { Analytics } from '../analytics/Analytics';
import { HomePage } from './HomePage';
import { PlaygroundPage } from './Playground';

export class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { initialized: false };
  }


  componentWillMount() {
    if (!this.state.initialized) {
      ReactGA.initialize('UA-121572014-1', {
        debug: process.env.NODE_ENV === 'development'
      });
      this.setState({ initialized: true });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Analytics>
          <Switch>
            <Route exact path="/playground" component={PlaygroundPage} />
            <Route component={HomePage} />
          </Switch>
          <HomePage />
        </Analytics>
      </BrowserRouter>
    );
  }
}
