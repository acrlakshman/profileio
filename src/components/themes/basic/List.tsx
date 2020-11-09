import React, { Component } from 'react';
import loadable from '@loadable/component';

import {
  Basics,
  Config,
  ProfileSections,
  Projects as ProjectsType,
  Publications as PublicationsType,
} from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';
import Header from './Header';
import Footer from './Footer';
import LoadSpinner from './LoadSpinner';

interface ComponentProps {
  config: Config;
  basics: Basics;
  profileSectionName: string;
  profileSectionData: PublicationsType | ProjectsType;
}

const LoadableSectionPublications = loadable(
  () => import('./SectionPublications'),
  {
    fallback: <LoadSpinner below={true} label={'Publications'} />,
  }
);

const LoadableSectionProjects = loadable(() => import('./SectionProjects'), {
  fallback: <LoadSpinner below={true} label={'Publications'} />,
});

export const sectionListHasRender = <
  T extends ProfileSections[K],
  K extends keyof ProfileSections
>(
  sectionDetail: T
): boolean => {
  if (sectionDetail) {
    for (let i = 0; i < sectionDetail.list.length; i++) {
      if (sectionDetail.list[i].render) return true;
    }
  }

  return false;
};

const renderBody = <
  T extends ProfileSections[K],
  K extends keyof ProfileSections
>(
  profileSectionName: string,
  profileSectionData: T
): JSX.Element => {
  if (profileSectionData && sectionListHasRender(profileSectionData)) {
    switch (profileSectionName) {
      case ProfileField.Publications:
        return (
          <LoadableSectionPublications
            sectionDetail={profileSectionData as PublicationsType}
            limitItemsToRender={false}
            renderDividerBelowLabel={true}
          />
        );
      case ProfileField.Projects:
        return (
          <LoadableSectionProjects
            sectionDetail={profileSectionData as ProjectsType}
            limitItemsToRender={false}
            renderDividerBelowLabel={true}
          />
        );
      default:
        return <div></div>;
    }
  } else {
    return <div>No content to show</div>;
  }
};

class List extends Component<ComponentProps> {
  renderPage = () => {
    return (
      <div className="wrapper-0">
        <div className="wrapper-1 rounded">
          <Header renderSectionsInNavBar={false} />
          {renderBody(
            this.props.profileSectionName,
            this.props.profileSectionData
          )}
        </div>
        <section
          className="content-section"
          style={{ padding: '1.5rem 0 1.5rem 0', background: 'transparent' }}
        ></section>
        <Footer config={this.props.config} basics={this.props.basics} />
      </div>
    );
  };

  render() {
    return <>{this.renderPage()}</>;
  }
}

export default List;
