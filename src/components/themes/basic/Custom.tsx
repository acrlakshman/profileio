import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import LoadSpinner from './LoadSpinner';
import SectionLabel from './SectionLabel';
import Content from './Content';
import Divider from './SectionDivider';
import Header from './Header';
import Footer from './Footer';
import { StoreState } from '../../../reducers';

import { ProfileField } from '../../../types/fields';
import {
  Basics,
  Config,
  CustomSection,
  SlugMap,
} from '../../../types/profileWeb';

import './styles.css';

interface ComponentProps {
  slug: string;
  url: string;
  config: Config;
  basics: Basics;
  sections?: CustomSection[];
  slugMap: SlugMap;
}

const LoadableMarkdown = loadable(() => import('../../Markdown'), {
  fallback: <LoadSpinner below={true} label={''} />,
});

class Custom extends Component<ComponentProps> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBody = (): JSX.Element => {
    const url = this.props.url.replace('/', '');
    const idx = this.props.slugMap[ProfileField.Custom as string][url]
      ?.position;

    if (
      this.props.sections &&
      this.props.sections[idx] &&
      this.props.sections[idx].render &&
      this.props.sections[idx].webPage?.detail
    ) {
      return (
        <Content id={''}>
          <SectionLabel label={this.props.sections[idx].label} />
          <Divider />
          <div
            className="content-body text-left"
            style={{ margin: '2rem 2rem 0 2rem' }}
          >
            <LoadableMarkdown
              className="content-body markdown"
              content={this.props.sections[idx].webPage?.detail || ''}
            />
          </div>
        </Content>
      );
    } else {
      return (
        <Content id="">
          <SectionLabel label="" />
          <div className="" style={{ margin: '2rem 2rem 0 2rem' }}>
            <LoadableMarkdown
              className="content-body markdown"
              content="Page Not Found"
            />
          </div>
        </Content>
      );
    }
  };

  render() {
    return (
      <div className="wrapper-0">
        <div className="wrapper-1 rounded">
          <Header renderSectionsInNavBar={false} />
          {this.renderBody()}
        </div>
        <section
          className="content-section"
          style={{ padding: '1.5rem 0 1.5rem 0', background: 'transparent' }}
        ></section>
        <Footer config={this.props.config} basics={this.props.basics} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    config: state.config,
    basics: state.basics,
    sections: state.sections.custom,
    slugMap: state.slugMap,
  };
};

export default connect(mapStateToProps, {})(Custom);
