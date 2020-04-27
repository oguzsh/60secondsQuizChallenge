import React from 'react';
import Button from './base/Button';
import Text from './base/Text';

function ActionButton({children, ...props}) {
  return (
    <Button
      minWidth="250px"
      height="50px"
      borderRadius="normal"
      bg="purple"
      {...props}>
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}) {
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

export default ActionButton;
