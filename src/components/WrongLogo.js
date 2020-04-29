import React from 'react';

import LottieView from 'lottie-react-native';

const WrongLogo = () => {
  return (
    <LottieView
      source={require('../assets/animatedIcons/wrongAnswer.json')}
      autoPlay
      style={{
        width: 220,
      }}
    />
  );
};

export default WrongLogo;
