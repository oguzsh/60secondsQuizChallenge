import React from 'react';
import {SafeAreaView} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuestions} from '../redux/actions';

import Column from '../components/base/Column';
import Row from '../components/base/Row';
import Text from '../components/base/Text';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import CorrectLogo from '../components/CorrectLogo';

import theme from '../utils/theme';
import Score from '../components/Score';

const CorrectAnswerView = ({navigation}) => {
  return (
    <Column as={SafeAreaView} flex={1} bg="white">
      <Column mt={40}>
        <CorrectLogo />
      </Column>

      <Column flex={1}>
        <Text fontFamily={theme.fontFamily.bold} color="black" fontSize={28}>
          Congratulations!
        </Text>

        <Row>
          <Text
            mr={10}
            fontFamily={theme.fontFamily.medium}
            color="black"
            fontSize={18}>
            You're won
          </Text>
          <Score score={100} />
        </Row>

        <Row mt={20}>
          <Text
            mr={10}
            fontFamily={theme.fontFamily.medium}
            color="black"
            fontSize={18}>
            Total:
          </Text>
          <Score score={800} />
        </Row>

        <ActionButton
          mt={20}
          borderRadius={30}
          onPress={() => navigation.navigate("WrongAnswer")}
          bg="purple">
          <ActionButtonTitle color="white">NEXT QUESTION</ActionButtonTitle>
        </ActionButton>
      </Column>
    </Column>
  );
};

export default CorrectAnswerView;
