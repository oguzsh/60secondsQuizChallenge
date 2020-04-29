import React from 'react';
import Button from './base/Button';

function IconButton({children, ...props}) {
  return (
    <Button
      minWidth="64px"
      height="64px"
      borderRadius="normal"
      {...props}>
      {children}
    </Button>
  );
}

export default IconButton;
