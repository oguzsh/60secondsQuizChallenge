import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Views
import HomeView from './views/HomeView';
import QuestionView from './views/QuestionView';
import CorrectAnswerView from './views/CorrectAnswerView';
import WrongAnswerView from './views/WrongAnswerView';

import IconButton from './components/IconButton';
import ExitIcon from './components/icons/exit';
import Text from './components/base/Text';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionView}
          options={({navigation, route}) => ({
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
            headerStyle: {
              elevation: 0,
            },
            headerLeft: () => (
              <IconButton onPress={() => navigation.navigate('Home')}>
                <ExitIcon />
              </IconButton>
            ),
          })}
        />
        <Stack.Screen
          name="CorrectAnswer"
          component={CorrectAnswerView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WrongAnswer"
          component={WrongAnswerView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
