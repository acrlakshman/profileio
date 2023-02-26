import React, { Component } from 'react';
import loadable from '@loadable/component';
import LoadSpinner from './LoadSpinner';

import {
  CustomSection,
  ProfileCustomSection,
  ProfileSections,
  ProfileSectionsWeb,
  Projects,
  Publications,
  Gallery,
  Education,
  Work,
} from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface Props {
  sectionName: string;
  sections: ProfileSectionsWeb;
}

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

const sectionCustomHasRender = <T extends ProfileCustomSection[K], K extends keyof ProfileCustomSection>(sectionDetail: T): boolean => {
  if (sectionDetail) {
    for (let i = 0; i < sectionDetail.length; i++) {
      if (sectionDetail[i].render) return true;
    }
  }

  return false;
}

const LoadableSectionExperience = loadable(
  () => import('./SectionExperience'),
  {
    fallback: <LoadSpinner above={true} label={'Experience'} />,
  }
);

const LoadableSectionEducation = loadable(() => import('./SectionEducation'), {
  fallback: <LoadSpinner above={true} label={'Education'} />,
});

const LoadableSectionPublications = loadable(
  () => import('./SectionPublications'),
  {
    fallback: <LoadSpinner above={true} label={'Publications'} />,
  }
);

const LoadableSectionProjects = loadable(() => import('./SectionProjects'), {
  fallback: <LoadSpinner above={true} label={'Publications'} />,
});

const LoadableSectionGallery = loadable(() => import('./SectionGallery'), {
  fallback: <LoadSpinner above={true} label={'Publications'} />,
});

const LoadableSectionCustom = loadable(() => import('./SectionCustom'), {
  fallback: <LoadSpinner above={true} label={'Publications'} />,
});

class Section extends Component<Props> {
  renderSection = <
    T extends ProfileSections[K],
    K extends keyof ProfileSections
  >(
    sectionDetail: T
  ): JSX.Element | undefined => {
    if (sectionDetail) {
      switch (this.props.sectionName) {
        case ProfileField.Work:
          return (
            <LoadableSectionExperience
              sectionDetail={sectionDetail as Work}
              renderDividerAboveLabel={true}
            />
          );
        case ProfileField.Education:
          return (
            <LoadableSectionEducation
              sectionDetail={sectionDetail as Education}
              renderDividerAboveLabel={true}
            />
          );
        case ProfileField.Publications:
          return (
            <LoadableSectionPublications
              sectionDetail={sectionDetail as Publications}
              limitItemsToRender={true}
              renderDividerAboveLabel={true}
            />
          );
        case ProfileField.Projects:
          return (
            <LoadableSectionProjects
              sectionDetail={sectionDetail as Projects}
              limitItemsToRender={true}
              renderDividerAboveLabel={true}
            />
          );
        case ProfileField.Gallery:
          return (
            <LoadableSectionGallery sectionDetail={sectionDetail as Gallery} />
          );
        default:
          return <div></div>;
      }
    }
  };

  renderCustomSection = (sectionDetail: CustomSection, key: string) => {
    if (
      sectionDetail &&
      this.props.sectionName === ProfileField.Custom &&
      sectionDetail.render
    ) {
      if (sectionDetail.value) {
        return (
          <LoadableSectionCustom
            class=""
            id={sectionDetail.label}
            key={key}
            label={sectionDetail.label}
            content={sectionDetail.value}
          />
        );
      }
    }
  };

  renderItem = () => {
    let sectionName = this.props.sectionName as keyof ProfileSectionsWeb;
    let sectionDetail = this.props.sections[sectionName];

    if (sectionDetail && !(sectionDetail instanceof Array)) {
      if (sectionListHasRender(sectionDetail)) {
        return this.renderSection(sectionDetail)
      }
    } else if (sectionDetail instanceof Array) {
      if (sectionCustomHasRender(sectionDetail)) {
        return sectionDetail.map((section: CustomSection, index: number) => {
            return this.renderCustomSection(section, `${this.props.sectionName}_${index}`)
          });
      }
    }
  };

  render() {
    return <>{this.renderItem()}</>;
  }
}

export default Section;
