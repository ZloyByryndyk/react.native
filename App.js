// Библиотеки которые мы используем в своем проекте
import React from 'react';
import { StyleSheet, View, } from 'react-native';
// Компоненты которые мы импортируем
import LoadingScreen from './src/components/LoadingScreen/index.js'
import MainPage from './src/components/MainPage/index.js'

// HTML
export default class App extends React.Component {
  // методы которые используются в теле проекта
  state = {
    showLoadingScreen: true, 
    showMainPage: false,
  }

  showMainPage = () => {
    this.setState({
      showLoadingScreen: false,
      showMainPage:true,
    })
  }

  render() {
    return (
      <View style={styles.background}>
        {
          this.state.showLoadingScreen && (
            <LoadingScreen goMainPage={this.showMainPage} />
          )
        }
        {
          this.state.showMainPage && (
            <MainPage/>
          )
        }
      </View>
    )
  }
}

// CSS
const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});
