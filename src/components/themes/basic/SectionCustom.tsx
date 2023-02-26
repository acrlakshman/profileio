import React, { Component } from 'react';
import Markdown from '../../Markdown';
import Content from './Content';
import SectionLabel from './SectionLabel';
import Divider from './SectionDivider';

import 'react-image-gallery/styles/css/image-gallery.css';
import './styles.css';

interface ComponentProps {
  class: string;
  id: string;
  label: string;
  content: string;
}

class Section extends Component<ComponentProps> {
  render() {
    return (
      <Content id={this.props.id}>
        <Divider />
        <SectionLabel label={this.props.label} />
        <div
          className="content-body text-left"
          style={{ margin: '2rem 2rem 0' }}
        >
          <Markdown
            className="content-body markdown"
            content={this.props.content}
          />
        </div>
      </Content>
    );
  }
};

export default Section;
