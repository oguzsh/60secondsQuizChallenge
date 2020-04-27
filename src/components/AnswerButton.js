import React from 'react';
import Button from './base/Button';
import Text from './base/Text';

function AnswerButton({children, ...props}) {
  return (
    <Button
      minWidth="300px"
      height="70px"
      borderRadius="normal"
      bg="black"
      {...props}>
      {children}
    </Button>
  );
}

export function AnswerButtonTitle({children, ...props}) {
  return (
    <Text
      color="white"
      fontWeight="bold"
      style={{textTransform: 'uppercase'}}
      {...props}>
      {children}
    </Text>
  );
}

export default AnswerButton;
