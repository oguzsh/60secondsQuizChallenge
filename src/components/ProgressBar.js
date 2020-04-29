import React from 'react';

import AnimatedProgressWheel from 'react-native-progress-wheel';

import theme from '../utils/theme';
import Text from './base/Text';

const ProgressBar = ({progress = 50}) => {
  return (
    <AnimatedProgressWheel
      size={64}
      width={8}
      color={theme.colors.purple}
      progress={80}
      animateFromValue={0}
      duration={2000}
      backgroundColor={theme.colors.lightGrey}
    >
    </AnimatedProgressWheel>
  );
};

export default ProgressBar;
