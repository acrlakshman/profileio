import React from 'react';
import SectionLabel from './SectionLabel';
import Content from './Content';
import re_weburl from '../../../auxiliaries/regex-weburl';
import config from '../../../config';
import Card from './Card'
import Divider from './SectionDivider';

import {
  ArticleTypeWeb,
  BookTypeWeb,
  InCollectionTypeWeb,
  MiscTypeWeb,
  Publication,
  Publications,
  TechReportTypeWeb,
  ThesisTypeWeb,
  UnPublishedTypeWeb,
} from '../../../types/profileWeb';
import {
  ProfileField,
  PublicationTypes,
  ThesisTypes,
} from '../../../types/fields';

import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface Props {
  sectionDetail: Publications;
  limitItemsToRender?: boolean;
  renderDividerAboveLabel?: boolean;
  renderDividerBelowLabel?: boolean;
}

const renderTitle = (publicationDetail: Publication): string => {
  return publicationDetail.title;
};

const renderAuthors = (
  publicationDetail: Publication
): string => {
  return publicationDetail.author ? publicationDetail.author : '';
};

const renderArticleMeta = (publicationDetail: ArticleTypeWeb): string => {
  return (
    `_${publicationDetail.journal}_, ${publicationDetail.volume}: ${publicationDetail.pages}, ${publicationDetail.year}.`
  );
};

const renderBookMeta = (publicationDetail: BookTypeWeb): string => {
  if (!publicationDetail.series) {
    return (
      `${publicationDetail.address},${' '}${publicationDetail.edition ? (() => `${publicationDetail.edition} edition, `)() : ''}${publicationDetail.year}`
    );
  } else {
    return (
      `${publicationDetail.volume
          ? (() => `Volume ${publicationDetail.volume} of `)()
          : ''}
        _${publicationDetail.series}._ ${publicationDetail.publisher},${' '}
        ${publicationDetail.address}, ${publicationDetail.year}.`
    );
  }
};

const renderThesisMeta = (publicationDetail: ThesisTypeWeb): string => {
  return (
    `${(() => {
        switch (publicationDetail.category) {
          case ThesisTypes.PhD:
            return 'PhD Thesis';
          case ThesisTypes.Masters:
            return 'Masters Thesis';
          case ThesisTypes.Bachelors:
            return 'Bachelors Thesis';
          default:
            return 'Thesis';
        }
      })()}, ${publicationDetail.address}, ${publicationDetail.year}`
  );
};

const renderTechReportMeta = (
  publicationDetail: TechReportTypeWeb
): string => {
  return (
    `${publicationDetail.series}, ${publicationDetail.address},${' '}${publicationDetail.year}`
  );
};

const renderInCollectionMeta = (
  publicationDetail: InCollectionTypeWeb
): string => {
  return (
    `In ${publicationDetail.editor}, editor,${' '}_${publicationDetail.booktitle}_, pages ${publicationDetail.year}.${' '}${publicationDetail.publisher}, ${publicationDetail.address},${' '}${publicationDetail.year}`
  );
};

const renderMiscMeta = (publicationDetail: MiscTypeWeb): string => {
  return publicationDetail.howpublished;
};

const renderUnPublishedMeta = (
  publicationDetail: UnPublishedTypeWeb
): string => {
  return (
    `${publicationDetail.note}${publicationDetail.year ? `, ${publicationDetail.year}.` : '.'}`
  );
};

const renderPublicationMeta = (publicationDetail: Publication): string => {
  switch (publicationDetail.type) {
    case PublicationTypes.Article:
      return renderArticleMeta(publicationDetail as ArticleTypeWeb);
    case PublicationTypes.Book:
      return renderBookMeta(publicationDetail as BookTypeWeb);
    case PublicationTypes.Thesis:
      return renderThesisMeta(publicationDetail as ThesisTypeWeb);
    case PublicationTypes.TechReport:
      return renderTechReportMeta(publicationDetail as TechReportTypeWeb);
    case PublicationTypes.InCollection:
      return renderInCollectionMeta(publicationDetail as InCollectionTypeWeb);
    case PublicationTypes.Misc:
      return renderMiscMeta(publicationDetail as MiscTypeWeb);
    case PublicationTypes.UnPublished:
      return renderUnPublishedMeta(publicationDetail as UnPublishedTypeWeb);
    default:
      return '';
  }
};

const renderPublication = (
  publicationDetail: Publication,
  key: string
): JSX.Element => {
  let imageSrc = publicationDetail.thumbnail;
  if (imageSrc && !re_weburl.test(imageSrc)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageSrc}`;
  }

  let title = renderTitle(publicationDetail);
  let authors = renderAuthors(publicationDetail);
  let description = renderPublicationMeta(publicationDetail);
  return (
    <Card
      key={key}
      id={key}
      slugPrefix={`/publication`}
      url={publicationDetail.url}
      webPage={publicationDetail.webPage}
      title={title}
      team={authors}
      description={description}
      thumbnail={publicationDetail.thumbnail}
    />
  );
};

const renderOverflowButton = () => {
  return (
    <Link key={'publications'} to="/publications">
      <div style={{ textAlign: 'end' }}>
        <Button variant="primary">Full Publications List {'>>'}</Button>
      </div>
    </Link>
  );
};

const renderSectionBody = (
  sectionDetail: Publications,
  keyPrefix: string,
  limitItemsToRender: boolean
): JSX.Element => {
  return (
    <div className="content-body">
      <div className="content-list">
        <div className="content">
          {(() => {
            let count = 0;
            let maxItems = sectionDetail.maxItemsToRender
              ? sectionDetail.maxItemsToRender
              : sectionDetail.list.length <=
                config.maxItemsToRenderInHomePage.publications
              ? sectionDetail.list.length
              : config.maxItemsToRenderInHomePage.publications;

            return sectionDetail.list.map((publication, index) => {
              return publication.render && count < maxItems
                ? (limitItemsToRender && ++count,
                  renderPublication(publication.value, `${keyPrefix}_${index}`))
                : publication.render && count === maxItems
                ? (++count, renderOverflowButton())
                : '';
            });
          })()}
        </div>
      </div>
    </div>
  );
};

const Section = (props: Props) => {
  return (
    <Content id={ProfileField.Publications}>
      {props.renderDividerAboveLabel && <Divider />}
      <SectionLabel label={props.sectionDetail.label} />
      {props.renderDividerBelowLabel && <Divider />}
      {renderSectionBody(
        props.sectionDetail,
        ProfileField.Publications,
        props.limitItemsToRender || false
      )}
    </Content>
  );
};

export default Section;
