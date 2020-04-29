import React from 'react';
import {Svg, Path} from 'react-native-svg';

const ExitIcon = (props) => (
  <Svg fill="none" {...props} width={25} height={22}>
    <Path
      d="M12.59 6L10 8.59 7.41 6 6 7.41 8.59 10 6 12.59 7.41 14 10 11.41 12.59 14 14 12.59 11.41 10 14 7.41 12.59 6zM10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#000"
    />
  </Svg>
);

export default ExitIcon;
