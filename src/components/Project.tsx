import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import ReactGA from 'react-ga';
import { StoreState } from '../reducers';
import ProjectBasic from './themes/basic/Project';

import {
  Config,
  ProfileSectionsWeb,
  Project as ProjectType,
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

class Project extends Component<ComponentProps, ComponentState> {
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

  pageContent = (): ProjectType | undefined => {
    const idx = this.props.slugMap[ProfileField.Projects as string][
      this.state.slug
    ].position;

    if (
      this.props.sections.projects &&
      this.props.sections.projects.list[idx].render &&
      this.props.sections.projects.list[idx].value.webPage
    ) {
      return this.props.sections.projects.list[idx].value;
    }
  };

  renderPage = () => {
    if (this.props.config.theme.render) {
      switch (this.props.config.theme.value) {
        case WebThemes.BASIC:
          const data = this.pageContent();
          return data ? <ProjectBasic data={data} /> : <div></div>;
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

export default connect(mapStateToProps, {})(Project);
