import React, { Component } from 'react';
import loadable from '@loadable/component';
import LoadSpinner from './LoadSpinner';
import SectionLabel from './SectionLabel'
import SectionBody from './SectionBody';
import SocialProfiles from './SocialProfiles';

import { Basics, BasicValueType } from '../../../types/profileWeb';

import './styles.css';

interface ComponentProps {
  basics: Basics
}

interface ComponentState {
  image: string
}


const LoadableAvatar = loadable(() => import('./Avatar'), {
  fallback: <LoadSpinner label={''} />,
});

class Introduction extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { image: '' };
  }

  getLabelElement = (label: BasicValueType) => {
    if (label.render) {
      return (
        <div className="text-center label">
          <p>{label.value}</p>
        </div>
      );
    }
  };

  getSummary = (summary: BasicValueType) => {
    if (summary.render) {
      return (
        <section id="introduction" className="content-section">
          <div className="container bg-white">
            <div className="container main-container">
              <div className="content">
                <SectionLabel label={summary.label} />
                <SectionBody class="summary text-left" value={summary.value} />
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  render() {
    return (
      <div>
        <section className="content-section introduction">
          <div className="container">
            <LoadableAvatar image={this.props.basics.image} />
            {this.getLabelElement(this.props.basics.label)}
            <SocialProfiles profiles={this.props.basics.profiles} />
          </div>
        </section>
        <div className="divider"></div>
        {this.getSummary(this.props.basics.summary)}
      </div>
    );
  }
}

export default Introduction;
