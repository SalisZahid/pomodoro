import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PomodoroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptySpace}>
        <Text style={styles.titleTxt}>Pomodoro</Text>
      </View>
      <View style={styles.timeContainerOuter}>
        <View style={styles.timeContainer}>
          <View style={styles.timeInner}>
            <Text style={styles.minText}>24</Text>
            <View>
              <View style={styles.secInner}>
                <Text style={styles.secText}>00</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.configButton}>
            <TouchableOpacity>
              <Text style={styles.configText}>Configure time</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton}>
          <View style={styles.btnInner}>
            <Text style={styles.btnText}>Start</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopButton}>
          <View style={styles.btnInner}>
            <Text style={styles.btnText}>Stop</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PomodoroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#221F32',
    flex: 1,
  },
  timeContainer: {
    // backgroundColor: 'gray',
    // flex: 4,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },
  timeContainerOuter: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  timeInner: {
    flexDirection: 'row',
    // backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    // backgroundColor: 'white',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  emptySpace: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
  },
  startButton: {
    width: 118,
    height: 114,
    borderRadius: 85,
    backgroundColor: '#50D167',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButton: {
    width: 118,
    height: 114,
    borderRadius: 85,
    backgroundColor: '#E22625',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
  btnInner: {
    borderWidth: 1,
    borderRadius: 85,
    width: 111,
    height: 107,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  minText: {
    fontSize: 189,
    fontWeight: '100',
    color: 'white',
  },
  secText: {
    fontSize: 48,
    fontWeight: '100',
    color: 'white',
  },
  secInner: {
    position: 'absolute',
    bottom: 36,
  },
  titleTxt: {
    color: 'white',
    fontSize: 26,
  },
  configText: {
    color: 'white',
    fontSize: 18,
  },
  configButton: {
    position: 'absolute',
    left: 30,
  },
});
