import React from 'react';
import { useSpring, animated } from 'react-spring';

import './styles.css';

interface Props {
  label?: string;
}

const SectionLabel = ({ label }: Props): JSX.Element => {
  const [{ scale }, setScale] = useSpring(() => ({ scale: '0' }));

  return (
    <div className="content-header">
      <p
        onMouseEnter={() => setScale({ scale: '1' })}
        onMouseLeave={() => setScale({ scale: '0' })}
        className="content-header-text"
      >
        <animated.p
          style={{
            transform: scale
              .interpolate({
                range: [0, 1],
                output: [1, 1.25],
              })
              .interpolate((scale) => `scale(${scale})`),
          }}
        >
          {label}
        </animated.p>
      </p>
    </div>
  );
};

export default SectionLabel;
