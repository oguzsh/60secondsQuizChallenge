import React from 'react';
import {SafeAreaView} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuestions} from '../redux/actions';

import Column from '../components/base/Column';
import Row from '../components/base/Row';
import Text from '../components/base/Text';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import WrongLogo from '../components/WrongLogo';

import theme from '../utils/theme';
import Score from '../components/Score';

const WrongAnswerView = ({navigation}) => {
  return (
    <Column as={SafeAreaView} flex={1} bg="white">
      <Column mt={40}>
        <WrongLogo />
      </Column>

      <Column flex={1}>
        <Text fontFamily={theme.fontFamily.bold} color="black" fontSize={28}>
          Game Over!
        </Text>

        <Text fontFamily={theme.fontFamily.bold} color="black" fontSize={18}>
          Maybe next time :(
        </Text>

        <Row mt={20}>
          <Text
            mr={10}
            fontFamily={theme.fontFamily.medium}
            color="black"
            fontSize={18}>
            You Score:
          </Text>
          <Score score={800} />
        </Row>

        <ActionButton
          mt={30}
          borderRadius={30}
          onPress={() => console.log('hi')}
          bg="green">
          <ActionButtonTitle color="white">PLAY AGAIN</ActionButtonTitle>
        </ActionButton>

        <ActionButton
          mt={20}
          borderRadius={30}
          onPress={() => console.log('hi')}
          bg="black">
          <ActionButtonTitle color="white">RETURN HOME</ActionButtonTitle>
        </ActionButton>
      </Column>
    </Column>
  );
};

export default WrongAnswerView;
