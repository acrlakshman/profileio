import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../reducers';
import ListBasic from './themes/basic/List';

import {
  Basics,
  Config,
  ProfileSectionsWeb,
  Projects as ProjectsType,
  Publications as PublicationsType,
  SlugMap,
} from '../types/profileWeb';
import { ProfileField } from '../types/fields';
import { WebThemes } from '../types/themes';

interface ComponentProps extends RouteComponentProps<{ id: string }> {
  config: Config;
  basics: Basics;
  sections: ProfileSectionsWeb;
  slugMap: SlugMap;
}

interface ComponentState {
  slug: string;
}

class List extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { slug: this.props.match.url.replace('/', '') };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getProfileSection = (): PublicationsType | ProjectsType | undefined => {
    const section = this.props.sections[
      this.state.slug as ProfileField.Publications | ProfileField.Projects
    ];

    return section;
  };

  renderPage = () => {
    if (this.props.config.theme.render) {
      switch (this.props.config.theme.value) {
        case WebThemes.BASIC:
          const data = this.getProfileSection();
          return data ? (
            <ListBasic
              config={this.props.config}
              basics={this.props.basics}
              profileSectionName={this.state.slug}
              profileSectionData={data}
            />
          ) : (
            <div></div>
          );
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
    basics: state.basics,
    sections: state.sections,
    slugMap: state.slugMap,
  };
};

export default connect(mapStateToProps, {})(List);
