import React from 'react';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';

export class AnalyticsWithoutRouter extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      prevLocation: ''
    };
  }

  componentWillMount() {
    this.setState({ prevLocation: this.props.location.pathname });
  }

  render() {

    const currentPage = this.state.prevLocation;
    const nextPage = this.props.location.pathname;

    if (currentPage !== nextPage) {
      ReactGA.set({ nextPage });

      if (this.props.logPageView) {
        ReactGA.pageview(nextPage);
      }
    }

    return <div>{this.props.children}</div>;
  }
}

AnalyticsWithoutRouter.defaultProps = {
  logPageView: true
};

export const Analytics = withRouter(AnalyticsWithoutRouter);

export default Analytics;