import React from 'react';
import config from '../../../config';
import re_weburl from '../../../auxiliaries/regex-weburl';
import { BasicValueType } from '../../../types/profileWeb';

const Avatar = ({ image }: { image: BasicValueType }) => {
  if (image.render) {
    let backgroundImage = '';
    if (re_weburl.test(image.value)) {
      backgroundImage = `url(${image.value})`;
    } else {
      backgroundImage = `url(${process.env.PUBLIC_URL}/${config.imagesPath}/${image.value})`;
    }

    return (
      <div
        className="avatar"
        style={{
          backgroundImage,
        }}
      ></div>
    );
  }

  return <div></div>;
};

export default Avatar;
