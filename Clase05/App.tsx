/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import CountScreen from './src/components/Screens/CountScreen';
import React from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type AppProps = {
    atributo : string;
}
class App extends React.Component<AppProps> {
  private count: number = 0;
  private label: string = 'Hello';
  
  handleOnPress = () => {
    console.log("Press button");
    this.count++;
    console.log(this.count);
  };
  render(){
    return (
    <SafeAreaProvider>
    <StatusBar barStyle='light-content' backgroundColor={useColorScheme.white}/>
    <SafeAreaProvider style ={appStyles.safeArea}>
      
      <CountScreen label= {this.label} OnPress={this.handleOnPress} ></CountScreen>
    </SafeAreaProvider>
  );
  }
}






export default App;
