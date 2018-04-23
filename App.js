import React from 'react';
// import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
// import { Text, AppRegistry } from 'react-native';
//
// const App = () => (
//   <Text>Some Text</Text>
// );
//
// AppRegistry.registerComponent('albums1', () => App);

export default class App extends React.Component {
  render() {
    return (
        <Header headerText={'Albums'} />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
