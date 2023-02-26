import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { StoreState } from '../reducers';
import HomeBasic from './themes/basic/Home';

import { Config } from '../types/profileWeb';
import { WebThemes } from '../types/themes';

interface ComponentProps extends RouteComponentProps<{ id: string }> {
  config: Config;
}

class Home extends Component<ComponentProps> {
  componentDidMount() {
    this.props.history.listen((location) => {
      if (
        this.props.config.analytics &&
        this.props.config.analytics.ga &&
        this.props.config.analytics.ga.enable
      ) {
        ReactGA.initialize(this.props.config.analytics.ga.trackingId);
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      }
    });
  }

  renderPage = () => {
    if (this.props.config.theme.render) {
      switch (this.props.config.theme.value) {
        case WebThemes.BASIC:
          return <HomeBasic />;
        default:
          return <div></div>;
      }
    }

    return <div></div>;
  };

  render() {
    return this.renderPage();
  }
}

const mapStateToProps = (state: StoreState) => {
  return { config: state.config };
};

export default connect(mapStateToProps, {})(Home);
