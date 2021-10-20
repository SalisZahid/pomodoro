import React from 'react';
import PomodoroScreen from './Screens/PomodoroScreen';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BreakScreen from './Screens/BreakScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        // translucent
        backgroundColor={'#221F32'}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerTransparent: true,
              headerTitle: '',
              headerShadowVisible: false,
            }}
            name="Home"
            component={PomodoroScreen}
          />
          <Stack.Screen
            options={{
              headerTintColor: 'white',
              headerTransparent: true,
              headerTitle: '',
              headerShadowVisible: false,
            }}
            name="Break"
            component={BreakScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
