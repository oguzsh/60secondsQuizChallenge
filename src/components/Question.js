import React from 'react';
import {Dimensions} from 'react-native';

import Text from './base/Text';
import AnswerButton, {AnswerButtonTitle} from './AnswerButton';
import Column from './base/Column';
import Divider from './base/Divider';

function Question({question, choices, onItemSelected, status}) {
  const {width} = Dimensions.get('window');

 /* const buttonStyle =
    status === 'correct'
      ? {backgroundColor: 'green'}
      : status === 'incorrect'
      ? {backgroundColor: 'red'}
      : null;
*/

  return (
    <Column>
      <Text m={30} fontFamily="Poppins-Medium" fontSize={18} color="black">
        {question}
      </Text>
      <Divider width={width - 50} />
      <Column mt={30}>
        {choices.map((choice) => {
          return (
            <AnswerButton
              key={choice.id}
              m={10}
              onPress={() => onItemSelected(choice)}>
              <AnswerButtonTitle>{choice}</AnswerButtonTitle>
            </AnswerButton>
          );
        })}
      </Column>
    </Column>
  );
}

export default Question;
