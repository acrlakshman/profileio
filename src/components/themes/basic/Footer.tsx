import React, { FunctionComponent } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import { Config, Basics } from '../../../types/profileWeb';

interface ComponentProps {
  config: Config;
  basics: Basics;
}

const Footer: FunctionComponent<React.PropsWithChildren<ComponentProps>> = (
  props: React.PropsWithChildren<ComponentProps>
) => {
  return (
    <>
      <footer className="rounded">
        <div className="container d-flex justify-content-between flex-wrap">
          <div className="footer-content d-flex align-items-center flex-wrap">
            <AiOutlineCopyrightCircle />
            &nbsp;{new Date().getFullYear()}&nbsp;{props.basics.name.value}
          </div>
          {props.config.meta && props.config.meta.hideFooterCredit ? (
            <div></div>
          ) : (
            <div>
              Generated using{' '}
              <a href="https://github.com/acrlakshman/profileio">ProfileIO</a>
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
