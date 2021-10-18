import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import BreakMsgScreen from './screens/BreakMsgScreen';
import BreakScreen from './screens/BreakScreen';
import SettingsScreen from './screens/SettingsScreen';
import WorkMsgScreen from './screens/WorkMsgScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="BreakMsgScreen" component={BreakMsgScreen} />
        <Stack.Screen name="BreakScreen" component={BreakScreen} />
        <Stack.Screen name="WorkMsgScreen" component={WorkMsgScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
