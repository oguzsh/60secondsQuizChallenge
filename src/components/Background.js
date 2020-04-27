import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

function Background({children, ...props}) {
  return (
    <Svg
      height="50%"
      width="100%"
      viewBox="0 0 410 300"
      style={{
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
        margin: 0,
      }}>
      <Path
        d="M0.730713 45.9329C0.730713 45.9329 104.816 0 209.74 0C316.37 0 414 45.9329 414 45.9329V148.549H0.730713V45.9329Z"
        fill="#7C72FF"
      />
      <Path d="M0 330H412.904V50.6565H0V330Z" fill="#7C72FF" />
    </Svg>
  );
}

export default Background;
