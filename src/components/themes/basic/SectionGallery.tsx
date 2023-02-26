import React from 'react';
import { Element } from 'react-scroll';
import Content from './Content';
import SectionLabel from './SectionLabel';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';

import { Gallery, GalleryItem } from '../../../types/profileWeb';
import { ProfileField } from '../../../types/fields';

import './styles.css';

interface ComponentProps {
  sectionDetail: Gallery;
}

const renderYouTubeVideo = (item: GalleryItem, key: string): JSX.Element => {
  return (
    <div key={key} className="col-md-4">
      <div className="gallery-item embed-responsive embed-responsive-1by1">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${item.value.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={item.value.videoId}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const renderVimeoVideo = (item: GalleryItem, key: string): JSX.Element => {
  return (
    <div key={key} className="col-md-4">
      <div className="gallery-item embed-responsive embed-responsive-1by1">
        <iframe
          className="embed-responsive-item"
          src={`https://player.vimeo.com/video/${item.value.videoId}?title=0&byline=0&portrait=0&badge=0`}
          allow="autoplay; fullscreen"
          title={item.value.videoId}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const renderVideo = (item: GalleryItem, key: string): JSX.Element => {
  if (item.value.platform && item.value.videoId) {
    switch (item.value.platform) {
      case 'youtube':
        return renderYouTubeVideo(item, key);
      case 'vimeo':
        return renderVimeoVideo(item, key);
      default:
        return <div></div>;
    }
  }

  return <div></div>;
};

const renderImage = (item: GalleryItem, key: string): JSX.Element => {
  let imageSrc = item.value.src;
  if (imageSrc) {
    if (!re_weburl.test(imageSrc)) {
      imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
    }
  }

  return (
    <div key={key} className="col-md-4">
      <div className="gallery-item">
        <div className="caption">
          <div className="caption-content">
            <h2>{item.value.caption ? item.value.caption.title : ''}</h2>
            <p className="mb-0">
              {item.value.caption ? item.value.caption.description : ''}
            </p>
          </div>
        </div>
        <img
          className="img-fluid"
          src={imageSrc}
          alt={item.value.caption ? item.value.caption.title : ''}
        />
      </div>
    </div>
  );
};

const renderGalleryItem = (item: GalleryItem, key: string): JSX.Element => {
  switch (item.value.type) {
    case 'image':
      return renderImage(item, key);
    case 'video':
      return renderVideo(item, key);
    default:
      return <div></div>;
  }
};

const renderSectionBody = (
  sectionDetail: Gallery,
  keyPrefix: string
): JSX.Element => {
  return (
    <div className="row no-gutters">
      {sectionDetail.list.map((item: GalleryItem, index: number) => {
        return item.render
          ? renderGalleryItem(item, `${keyPrefix}_${index}`)
          : '';
      })}
    </div>
  );
};

const Section = (props: ComponentProps) => {
  return (
    <Content id={ProfileField.Gallery}>
      <div className="divider">
        <span></span>
        <span>&#10038;</span>
        <span></span>
      </div>
      <SectionLabel label={props.sectionDetail.label} />
      {renderSectionBody(props.sectionDetail, ProfileField.Gallery)}
    </Content>
  );
};

export default Section;
