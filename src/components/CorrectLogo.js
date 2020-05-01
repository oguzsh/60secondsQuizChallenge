import React from 'react';

import LottieView from 'lottie-react-native';

const CorrectLogo = () => {
  return (
    <LottieView
      source={require('../assets/animatedIcons/correctAnswer.json')}
      autoPlay
      loop
      style={{
        width: 300,
      }}
    />
  );
};

export default CorrectLogo;
