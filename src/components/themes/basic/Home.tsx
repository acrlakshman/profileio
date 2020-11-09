import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../reducers';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {
  getSortedArray,
  getProfileRankings,
} from '../../../auxiliaries/rankSections';
import sectionRanksTheme from './ranking';

import { Basics, Config, ProfileSectionsWeb } from '../../../types/profileWeb';

interface ComponentProps {
  config: Config;
  basics: Basics;
  sections: ProfileSectionsWeb;
}

interface ComponentState {
  sectionRanks: string[];
}

class Home extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { sectionRanks: [] };
  }

  componentDidMount() {
    let sectionRanksUser = getProfileRankings(this.props.sections);
    let sectionRanks = getSortedArray(sectionRanksTheme, sectionRanksUser);
    this.setState({ sectionRanks });
  }

  renderBody = (): JSX.Element => {
    return <Body sectionRanks={this.state.sectionRanks} />;
  };

  renderItem = () => {
    if (this.props.config.theme.render) {
      return (
        <div className="wrapper-0">
          <div className="wrapper-1 rounded">
            <Header
              sectionRanks={this.state.sectionRanks}
              renderSectionsInNavBar={true}
            />
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

export default connect(mapStateToProps, {})(Home);
