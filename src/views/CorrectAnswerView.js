import React from 'react';
import {SafeAreaView} from 'react-native';

import Row from '../components/base/Row';
import Column from '../components/base/Column';
import Text from '../components/base/Text';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';

const CorrectAnswerView = ({navigation}) => {
  return (
    <Row as={SafeAreaView} flex={1}>
      <Column>
        <Text> Correct Answer Page </Text>
        <ActionButton>
          <ActionButtonTitle>NEXT</ActionButtonTitle>
        </ActionButton>
      </Column>
    </Row>
  );
};

export default CorrectAnswerView;
