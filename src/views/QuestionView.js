import React from 'react';
import {SafeAreaView} from 'react-native';

import Row from '../components/base/Row';
import Column from '../components/base/Column';
import Text from '../components/base/Text';
import AnswerButton, {AnswerButtonTitle} from '../components/AnswerButton';

const QuestionView = ({navigation}) => {
  return (
    <Row as={SafeAreaView} flex={1}>
      <Column>
        <Text> Question Page </Text>
        <AnswerButton m={10}>
          <AnswerButtonTitle>A</AnswerButtonTitle>
        </AnswerButton>
        <AnswerButton m={10}>
          <AnswerButtonTitle>B</AnswerButtonTitle>
        </AnswerButton>
        <AnswerButton m={10}>
          <AnswerButtonTitle>C</AnswerButtonTitle>
        </AnswerButton>
        <AnswerButton m={10}>
          <AnswerButtonTitle>D</AnswerButtonTitle>
        </AnswerButton>
      </Column>
    </Row>
  );
};

export default QuestionView;
