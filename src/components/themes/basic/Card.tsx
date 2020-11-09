import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Markdown from '../../Markdown';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';

import { WebPageType } from '../../../types/profileWeb';

import './styles.css';

interface ComponentProps {
  id: string;
  slugPrefix: string; // `//example.com${slugPrefix}/${slug}`
  url?: string; // link
  webPage?: WebPageType;
  title: string;
  team?: string;
  description: string;
  thumbnail?: string;
}

const renderTeam = (cardDetail: ComponentProps): JSX.Element | undefined => {
  if (cardDetail.team) {
    return (
      <Markdown
        className="content-body markdown content-text"
        content={cardDetail.team}
      />
    );
  }
};

const renderDescription = (cardDetail: ComponentProps): JSX.Element => {
  return (
    <Markdown
      className="content-body markdown content-text"
      content={cardDetail.description}
    />
  );
};

const renderCardDetail = (
  cardDetail: ComponentProps,
  titleColor: string = 'black'
) => {
  let imageSrc = cardDetail.thumbnail;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  return (
    <>
      <div className="col-md-2 content-card-img">
        <img
          className="img-fluid border rounded image-item"
          alt="thumbnail"
          src={imageSrc}
        />
      </div>
      <div className="col-md-10">
        <div className="content-text-bold" style={{ color: `${titleColor}` }}>
          {cardDetail.title}
        </div>
        {renderTeam(cardDetail)}
        {renderDescription(cardDetail)}
      </div>
    </>
  );
};

const Card: FunctionComponent<ComponentProps> = (props: ComponentProps) => {
  if (
    props.webPage &&
    props.webPage.slug &&
    props.webPage.slug !== '' &&
    props.webPage.detail &&
    props.webPage.detail !== ''
  ) {
    if (!re_weburl.test(props.webPage.slug)) {
      return (
        <Link to={`${props.slugPrefix}/${props.webPage.slug}`}>
          <div
            className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start flex-nowrap row align-content-start border content-item"
            style={{ marginLeft: '0', marginRight: '0' }}
          >
            {renderCardDetail(props, '#0028ff')}
          </div>
        </Link>
      );
    } else {
      return (
        <a href={props.webPage.slug}>
          <div
            className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start flex-nowrap row align-content-start border content-item"
            style={{ marginLeft: '0', marginRight: '0' }}
          >
            {renderCardDetail(props, '#0028ff')}
          </div>
        </a>
      );
    }
  }

  if (props.url && props.url !== '') {
    return (
      <a href={props.url}>
        <div
          className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start flex-nowrap row align-content-start border content-item"
          style={{ marginLeft: '0', marginRight: '0' }}
        >
          {renderCardDetail(props, '#0028ff')}
        </div>
      </a>
    );
  }

  return (
    <div
      className="flex-shrink-1 justify-content-start align-items-start align-content-start align-self-start flex-nowrap row align-content-start border content-item"
      style={{ marginLeft: '0', marginRight: '0' }}
    >
      {renderCardDetail(props)}
    </div>
  );
};

export default Card;
