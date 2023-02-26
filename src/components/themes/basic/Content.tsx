import React, { FunctionComponent } from 'react';

interface Props {
  id: string
}

const Content: FunctionComponent<Props> = (props) => {
  return (
    <section id={props.id} className="content-section">
      <div className="container bg-white">
        <div className="content">{props.children}</div>
      </div>
    </section>
  );
};

export default Content;
