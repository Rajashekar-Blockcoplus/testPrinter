import React, { Component } from 'react';
import { NativeModules, StyleSheet,View, Text, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    //NativeModules.CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    //NativeModules.Bulb.turnOn("hello");
    NativeModules.Bulb.getPrinters();

    setTimeout(() => {
      console.log("calling this");
      NativeModules.Bulb.connectPrinter();
    }, 2000);
  }

  turnOn = () => {    
    //NativeModules.Bulb.turnOn();  
    //NativeModules.CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    NativeModules.Bulb.connectPrinter("BT:mPop");
  }

  turnOff = () => {
    NativeModules.Bulb.turnOff();
  }

  render() {
    return(
      <View style={styles.container}>     
        <Text style={styles.welcome}>Welcome to Light App!!</Text>     
        <Button        
          onPress={this.turnOn}       
          title="Turn ON"
          color="yellow"
        />
        <Button        
          onPress={this.turnOff}       
          title="Turn OFF"       
          color="red" 
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});