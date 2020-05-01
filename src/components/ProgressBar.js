import React, {useState, useEffect} from 'react';

import AnimatedProgressWheel from 'react-native-progress-wheel';

import theme from '../utils/theme';
import Text from './base/Text';
import Column from './base/Column';

const ProgressBar = ({time, navigation}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (timer <= 0) {
        navigation.navigate('WrongAnswer');
        clearInterval(interval);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <Column>
      <AnimatedProgressWheel
        size={64}
        width={6}
        color={theme.colors.purple}
        progress={100}
        animateFromValue={0}
        duration={60000}
        backgroundColor={theme.colors.lightGrey}
      />

      <Text
        style={{position: 'absolute', top: 20}}
        fontFamily="Poppins-Bold"
        fontSize={18}>
        {timer}
      </Text>
    </Column>
  );
};

export default ProgressBar;
