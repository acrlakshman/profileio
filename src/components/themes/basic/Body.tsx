import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../reducers';
import Introduction from './Introduction';
import Section from './Section';

import { Basics, ProfileSectionsWeb } from '../../../types/profileWeb';

interface ComponentProps {
  basics: Basics;
  sections: ProfileSectionsWeb;
  sectionRanks: string[];
}

class Body extends Component<ComponentProps> {
  renderSections = () => {
    return this.props.sectionRanks.map((section: string) => {
      return (
        <Section
          key={section}
          sectionName={section}
          sections={this.props.sections}
        />
      );
    });
  };

  renderItem = () => {
    return (
      <>
        <Introduction basics={this.props.basics} />
        {this.renderSections()}
      </>
    );
  };

  render() {
    return this.renderItem();
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    config: state.config,
    basics: state.basics,
    sections: state.sections,
  };
};

export default connect(mapStateToProps, {})(Body);
