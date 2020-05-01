import React from 'react';

import LottieView from 'lottie-react-native';

const WrongLogo = () => {
  return (
    <LottieView
      source={require('../assets/animatedIcons/wrongAnswer.json')}
      autoPlay={true}
      autoSize={true}
      style={{
        width: 400,
      }}
    />
  );
};

export default WrongLogo;
