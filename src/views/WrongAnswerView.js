import React from 'react';
import {SafeAreaView} from 'react-native';

import Row from '../components/base/Row';
import Column from '../components/base/Column';
import Text from '../components/base/Text';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';

const WrongAnswerView = ({navigation}) => {
  return (
    <Row as={SafeAreaView} flex={1}>
      <Column>
        <Text> Wrong Answer Page </Text>
        <ActionButton>
          <ActionButtonTitle>PLAY AGAIN</ActionButtonTitle>
        </ActionButton>
      </Column>
    </Row>
  );
};

export default WrongAnswerView;
