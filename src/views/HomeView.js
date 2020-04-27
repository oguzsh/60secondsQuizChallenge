import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Column from '../components/base/Column';
import Text from '../components/base/Text';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import WelcomeLogo from '../components/WelcomeLogo';
import Background from '../components/Background';

import theme from '../utils/theme';

const HomeView = ({navigation}) => {
  return (
    <Column as={SafeAreaView} flex={1} bg="white">
      <Column flex={1} mt={40}>
        <WelcomeLogo />
      </Column>

      <Column flex={1}>
        <Text fontFamily={theme.fontFamily.bold} color="white" fontSize={32}>
          WELCOME
        </Text>
        <Text fontFamily={theme.fontFamily.medium} color="white" fontSize={18}>
          TRIVIA GAME
        </Text>

        <ActionButton
          mt={40}
          borderRadius={30}
          onPress={() => navigation.navigate('Question')}
          bg="white">
          <ActionButtonTitle color="purple">GET STARTED</ActionButtonTitle>
        </ActionButton>
      </Column>

      <Background />
    </Column>
  );
};

export default HomeView;
