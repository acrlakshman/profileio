import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
import Card from './Card';
import Divider from './SectionDivider';

import { Project, Projects } from '../../../types/profileWeb';
import {ProfileField} from '../../../types/fields'

import './styles.css';

interface Props {
  sectionDetail: Projects;
  limitItemsToRender?: boolean;
  renderDividerAboveLabel?: boolean;
  renderDividerBelowLabel?: boolean;
}

const renderProject = (projectDetail: Project, key: string): JSX.Element => {
  let imageSrc = projectDetail.thumbnail;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  return (
    <Card
      key={key}
      id={key}
      slugPrefix={`/project`}
      url={projectDetail.url}
      webPage={projectDetail.webPage}
      title={projectDetail.name}
      team={projectDetail.team}
      description={projectDetail.description}
      thumbnail={projectDetail.thumbnail}
    />
  );
};

const renderOverflowButton = () => {
  return (
    <Link key={'projects'} to="/projects">
      <div style={{ textAlign: 'end' }}>
        <Button variant="primary">Full Projects List {'>>'}</Button>
      </div>
    </Link>
  );
}

const renderSectionBody = (sectionDetail: Projects, keyPrefix: string, limitItemsToRender: boolean): JSX.Element => {
  return (
    <div className="content-body">
      <div className="content-list">
        {(() => {
          let count = 0;
          let maxItems = sectionDetail.maxItemsToRender ? sectionDetail.maxItemsToRender : (
            sectionDetail.list.length <= config.maxItemsToRenderInHomePage.projects
              ? sectionDetail.list.length
              : config.maxItemsToRenderInHomePage.projects)
              
          return sectionDetail.list.map((project, index) => {
            return project.render && count < maxItems
              ?  (limitItemsToRender && ++count, renderProject(project.value, `${keyPrefix}_${index}`))
              : (project.render && count === maxItems ? (++count, renderOverflowButton()) : '');
          });
        })()}
      </div>
    </div>
  );
}

const Section = (props: Props) => {
  return (
    <Content id={ProfileField.Projects}>
      {props.renderDividerAboveLabel && <Divider />}
      <SectionLabel label={props.sectionDetail.label} />
      {props.renderDividerBelowLabel && <Divider />}
      {renderSectionBody(props.sectionDetail, ProfileField.Projects, props.limitItemsToRender || false)}
    </Content>
  );
};

export default Section;
