import React from 'react';

import LottieView from 'lottie-react-native';

const WelcomeLogo = () => {
  return (
    <LottieView
      source={require('../assets/animatedIcons/welcomeLogo.json')}
      autoPlay
      loop
      style={{
        position: 'absolute',
        top: 5,
        width: 250,
      }}
    />
  );
};

export default WelcomeLogo;
