import {View} from 'react-native';
import styled from 'styled-components';
import {
  position,
  compose,
  size,
  color,
  space,
  flexbox,
  layout,
  border,
} from 'styled-system';

const Row = styled(View)(
  compose(position, size, space, flexbox, layout, color, border),
);

Row.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Row;
