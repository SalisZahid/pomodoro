import React from 'react';
import {View,Text,StyleSheet}from 'react-native';

function BreakMsgScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Take a break</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    }
})

export default BreakMsgScreen;