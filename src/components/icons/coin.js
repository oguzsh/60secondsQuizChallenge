import React from 'react';

import {Svg, Path} from 'react-native-svg';

const CoinIcon = (props) => (
  <Svg fill="#FFCB45" {...props} width={25} height={22}>
    <Path
      d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm0-12.95L14.95 10 10 14.95 5.05 10 10 5.05zm0 2.829L7.879 10 10 12.121 12.121 10 10 7.879z"
      fill="#FFCB45"
    />
  </Svg>
);

export default CoinIcon;
