import React from 'react';
import {View,Text,StyleSheet,Button}from 'react-native';

function MainScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <Button title="Nav to break" onPress={()=>props.navigation.navigate('BreakMsgScreen')}></Button>
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

export default MainScreen;