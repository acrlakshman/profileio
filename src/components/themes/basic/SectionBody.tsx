import React from 'react';
import Markdown from '../../Markdown';

interface Props {
  class: string
  value: string
}

const SectionBody = (props: Props): JSX.Element => {
  return (
    <div className="content-body">
      <div className={props.class}>
        <Markdown className="content-body markdown" content={props.value} />
      </div>
    </div>
  );
};

export default SectionBody;
