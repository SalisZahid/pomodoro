import React from 'react';
import PomodoroScreen from './Screens/PomodoroScreen';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BreakScreen from './Screens/BreakScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <PomodoroScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
