import React from 'react';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';

export class AnalyticsWithoutRouter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      prevLocation: ''
    };
  }

  static getDerivedStateFromProps(props, state) {
    return state.prevLocation != props.location.pathname ?
      { ...state, prevLocation: props.location.pathname } :
      null;
  }

  componentDidMount() {
    const nextPage = this.props.location.pathname;

    ReactGA.set({ nextPage });

    if (this.props.logPageView) {
      ReactGA.pageview(nextPage);
    }
  }

  componentDidUpdate() {
    const currentPage = this.state.prevLocation;
    const nextPage = this.props.location.pathname;
    if (currentPage !== nextPage) {
      ReactGA.set({ nextPage });

      if (this.props.logPageView) {
        ReactGA.pageview(nextPage);
      }
    }
  }

  render() {

    return <div>{this.props.children}</div>;
  }
}

AnalyticsWithoutRouter.defaultProps = {
  logPageView: true
};

export const Analytics = withRouter(AnalyticsWithoutRouter);

export default Analytics;