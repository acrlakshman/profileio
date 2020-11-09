import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { StoreState } from '../../../reducers';
import { sectionListHasRender } from './Section';

import { Basics, Config, ProfileSectionsWeb } from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface ComponentProps {
  sectionRanks?: string[];
  renderSectionsInNavBar: boolean;
  config: Config;
  basics: Basics;
  sections: ProfileSectionsWeb;
}

interface ComponentState {
  navExpanded: boolean;
}

class Header extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { navExpanded: false };
  }

  setNavExpanded = (expanded: boolean) => {
    this.setState({ navExpanded: expanded });
  };

  closeNav = () => {
    this.setState({ navExpanded: false });
  };

  scrollLinkNav = (scrollToId: string, text: string): JSX.Element => {
    return (
      <ScrollLink
        activeClass="active"
        to={scrollToId}
        className="nav-link active"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-75}
        duration={1000}
        delay={100}
        isDynamic={true}
        onClick={this.closeNav}
      >
        {text}
      </ScrollLink>
    );
  };

  renderNavLink = (section: string): JSX.Element | undefined => {
    // TODO: optimize this.
    let id = '';
    let text = '';
    let render = false;

    switch (section) {
      case ProfileField.Basics as string:
        id = 'introduction';
        text = this.props.basics.summary.label;
        render = this.props.basics.summary.render;
        break;

      case ProfileField.Publications as string:
        id = ProfileField.Publications as string;
        if (this.props.sections.publications) {
          text = this.props.sections.publications.label;
          render = sectionListHasRender(this.props.sections.publications);
        }
        break;

      case ProfileField.Projects as string:
        id = ProfileField.Projects as string;
        if (this.props.sections.projects) {
          text = this.props.sections.projects.label;
          render = sectionListHasRender(this.props.sections.projects);
        }
        break;

      case ProfileField.Gallery as string:
        id = ProfileField.Gallery as string;
        if (this.props.sections.gallery) {
          text = this.props.sections.gallery.label;
          render = sectionListHasRender(this.props.sections.gallery);
        }
        break;

      case ProfileField.Work as string:
        id = ProfileField.Work as string;
        if (this.props.sections.work) {
          text = this.props.sections.work.label;
          render = sectionListHasRender(this.props.sections.work);
        }
        break;

      case ProfileField.Education as string:
        id = ProfileField.Education as string;
        if (this.props.sections.education) {
          text = this.props.sections.education.label;
          render = sectionListHasRender(this.props.sections.education);
        }
        break;

      default:
    }

    if (render) {
      return <Nav.Link>{this.scrollLinkNav(id, text)}</Nav.Link>;
    }
  };

  renderItem = (): JSX.Element => {
    return (
      <>
        <Navbar
          fixed="top"
          bg="primary"
          variant="dark"
          expand="md"
          onToggle={this.setNavExpanded}
          expanded={this.state.navExpanded}
        >
          <div className="container-fluid">
            <Link to="/" className="text-truncate">
              <Navbar.Brand>
                <strong>{this.props.basics.name.value}</strong>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {this.props.renderSectionsInNavBar &&
              ((): JSX.Element => (
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    {this.renderNavLink(ProfileField.Basics)}
                    {this.props.sectionRanks
                      ? this.props.sectionRanks.map((item: string) => {
                          return this.renderNavLink(item);
                        })
                      : ''}
                    {this.props.config.meta &&
                    this.props.config.meta.showResumeLink ? (
                      <Nav.Link href="/files/resume/resume.pdf">
                        <p className="nav-link active">R&eacute;sum&eacute;</p>
                      </Nav.Link>
                    ) : (
                      ''
                    )}
                  </Nav>
                </Navbar.Collapse>
              ))()}
          </div>
        </Navbar>
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

export default connect(mapStateToProps, {})(Header);
