import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Views
import HomeView from './views/HomeView';
import QuestionView from './views/QuestionView';
import CorrectAnswerView from './views/CorrectAnswerView';
import WrongAnswerView from './views/WrongAnswerView';

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
        <Stack.Screen name="Question" component={QuestionView} />
        <Stack.Screen name="ConfirmPassword" component={CorrectAnswerView} />
        <Stack.Screen name="WrongAnswerView" component={WrongAnswerView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
