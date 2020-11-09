import React, { Component, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player';
import { Modal } from 'react-bootstrap';
import Highlight from 'react-highlight.js';
import re_weburl from '../auxiliaries/regex-weburl';
import config from '../config';
import { isRenderVideo, isLinkAFile } from '../auxiliaries/regex';

import 'react-image-gallery/styles/css/image-gallery.css';

interface ComponentProps {
  className: string;
  content: string;
}

interface ComponentState {
  showModal: boolean;
  imageStartIndex: number;
}

interface LinkProps {
  href: string;
  title?: string;
  children?: ReactNode;
}

interface ImageProps {
  src: string;
  alt: string;
  title?: string;
  children?: ReactNode;
}

interface CodeProps {
  language: string;
  value: string;
}

const MyGallery = ({
  images,
  startIndex,
}: {
  images: { original: string; thumbnail: string }[];
  startIndex: number;
}) => {
  return (
    <ImageGallery
      items={images}
      slideOnThumbnailOver={true}
      startIndex={startIndex}
    />
  );
};

class Markdown extends Component<ComponentProps, ComponentState> {
  private images: { original: string; thumbnail: string }[] = [];
  private componentMounted = false;
  private imageCounter = 0;

  constructor(props: ComponentProps) {
    super(props);
    this.state = { showModal: false, imageStartIndex: 0 };
  }

  componentDidMount() {
    this.componentMounted = true;
  }

  componentWillUnmount() {
    this.images = [];
  }

  renderImage = (imageProps: ImageProps): JSX.Element => {
    let imageAlt = imageProps.alt;
    let imageSrc = imageProps.src;
    let imageTitle = imageProps.title;
    let imageCount = this.imageCounter;

    if (!re_weburl.test(imageProps.src)) {
      imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${imageProps.src}`;
    }

    if (!this.componentMounted)
      this.images = [
        ...this.images,
        { original: imageSrc, thumbnail: imageSrc },
      ];

    this.imageCounter++;

    return (
      <>
        <div key={imageCount}>
          <div className="gallery-item">
            <img
              className="img-fluid rounded"
              alt={imageAlt}
              src={imageSrc}
              title={imageTitle}
              onClick={() =>
                this.setState({ showModal: true, imageStartIndex: imageCount })
              }
            />
          </div>
        </div>
      </>
    );
  };

  renderCode = (codeProps: CodeProps): JSX.Element => {
    return (
      <Highlight language={codeProps.language}>{codeProps.value}</Highlight>
    );
  };

  renderLink = (linkProps: LinkProps) => {
    const renderVideo = linkProps.title
      ? isRenderVideo(linkProps.title)
      : false;

    if (renderVideo) {
      let videoUrl = linkProps.href;

      if (!re_weburl.test(videoUrl)) {
        videoUrl = `${process.env.PUBLIC_URL}/${config.videosPath}/${videoUrl}`;
      }

      return (
        <div className="row no-gutters">
          <div className="col-offset-lg-3 col-lg-6 col-sm-12">
            <div className="embed-responsive embed-responsive-1-by-1">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        </div>
      );
    } else {
      let url = linkProps.href;
      if (!re_weburl.test(url)) {
        url = `${process.env.PUBLIC_URL}/${linkProps.href}`;

        if (linkProps.title) {
          if (isLinkAFile(linkProps.title)) {
            url = `${process.env.PUBLIC_URL}/${config.filesPath}/${linkProps.href}`;
          }
        }
      }

      return (
        <a href={url} title={linkProps.title}>
          {linkProps.children}
        </a>
      );
    }
  };

  renderers = {
    image: this.renderImage,
    imageReference: this.renderImage,
    code: this.renderCode,
    link: this.renderLink,
    linkReference: this.renderLink,
  };

  renderSectionBody = (content: string): JSX.Element => {
    this.imageCounter = 0;
    return (
      <div className={`content-body markdown ${this.props.className}`}>
        <ReactMarkdown
          source={content}
          renderers={this.renderers}
        ></ReactMarkdown>
      </div>
    );
  };

  render() {
    return (
      <>
        {this.renderSectionBody(this.props.content)}
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
          size="lg"
          centered
        >
          <Modal.Body>
            <MyGallery
              images={this.images}
              startIndex={this.state.imageStartIndex}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Markdown;
