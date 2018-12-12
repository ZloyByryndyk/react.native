import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// Компоненты которые мы импортируем
import LoadingScreen from './src/components/LoadingScreen'




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Image
            style={styles.stretch}
            source={require('./src/image/tepping.jpg')}
        />
          <LoadingScreen />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  stretch: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  }
});
