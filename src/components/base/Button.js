import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  position,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
  border,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(position, size, space, flexbox, layout, borderRadius, color, border),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
