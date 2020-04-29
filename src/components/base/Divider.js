import {View} from 'react-native';
import styled from 'styled-components';
import {position, compose, size, color, layout} from 'styled-system';

const Divider = styled(View)(compose(position, size, layout, color));

Divider.defaultProps = {
  backgroundColor: 'lightGrey',
  height: 2,
};

export default Divider;
