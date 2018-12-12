import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';


export default class LoadingScreen extends React.Component {
  state = {
    inputTextValue: '',
  }

  handlerInput = (text) => {
    this.setState({inputTextValue: text})
  }

  render() {
    return (
      <View style={styles.Container}>
          <View style={styles.first} >
            <Text>{this.state.inputTextValue}</Text>
          </View>
          <View style={styles.first2}>
            <TextInput
              style={styles.input}
              onChangeText={this.handlerInput}
              value={this.state.inputTextValue}
            />
            <Button
              style={styles.Button}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.first3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
  },
  Button: {


  },
  first: {
    flex:5,
    borderWidth: 2,
    borderColor: 'blue',
  },
  first2: {
    flex:1,
    borderWidth: 2,
    borderColor: 'yellow',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  first3: {
    flex:10,
    borderWidth: 2,
    borderColor: 'orange',
  },
  input: {
    flex:1,
    // height: 40,
    // width: 250,
    borderColor: 'black',
    borderWidth: 3,
  }
});
