import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import ReactGA from 'react-ga';
import { StoreState } from '../reducers';
import PublicationBasic from './themes/basic/Publication';

import {
  Config,
  ProfileSectionsWeb,
  Publication as PublicationType,
  SlugMap,
} from '../types/profileWeb';
import { ProfileField } from '../types/fields';
import { WebThemes } from '../types/themes';

interface ComponentProps extends RouteComponentProps<{ id: string }> {
  config: Config;
  sections: ProfileSectionsWeb;
  slugMap: SlugMap;
}

interface ComponentState {
  slug: string;
}

class Publication extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { slug: this.props.match.params.id };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

  pageContent = (): PublicationType | undefined => {
    const idx = this.props.slugMap[ProfileField.Publications as string][
      this.state.slug
    ].position;

    if (
      this.props.sections.publications &&
      this.props.sections.publications.list[idx].render &&
      this.props.sections.publications.list[idx].value.webPage
    ) {
      return this.props.sections.publications.list[idx].value;
    }
  };

  renderPage = () => {
    if (this.props.config.theme.render) {
      switch (this.props.config.theme.value) {
        case WebThemes.BASIC:
          const data = this.pageContent();
          return data ? <PublicationBasic data={data} /> : <div></div>;
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
  return {
    config: state.config,
    sections: state.sections,
    slugMap: state.slugMap,
  };
};

export default connect(mapStateToProps, {})(Publication);
