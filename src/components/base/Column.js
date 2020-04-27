import {View} from 'react-native';
import styled from 'styled-components';
import {
  position,
  compose,
  size,
  space,
  flexbox,
  color,
  layout,
  border,
} from 'styled-system';

const Column = styled(View)(
  compose(position, size, space, flexbox, layout, color, border),
);

Column.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Column;
