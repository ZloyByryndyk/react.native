import React, {Fragment} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { MAIN_PAGE, TEPPING_TEST } from '../../const/index.js'
import {Test_tepping} from './Test_tepping/index.js'

export default class MainPage extends React.Component {
    state = {
        heightModal: 0,
        currenPage: MAIN_PAGE,
    }
    routing = (rout) => {
        this.setState({currenPage:rout})
    }

    showModalClick = () => {
        const heightModal = this.state.heightModal;
        if (heightModal > 0) {
            this.setState({ heightModal: 0 })
        }else {
            this.setState({ heightModal: 100 })
        }
    }
    hendlerClick = () => {
        this.setState({currenPage: TEPPING_TEST})
    }
    getCurrentComponent = () => {
        switch (this.state.currenPage) {
            case TEPPING_TEST:
                console.log(TEPPING_TEST);
                return <Test_tepping />;
            
            default: return (
                <Fragment>
                    <Image
                        style={styles.image}
                        source={require('../../image/page1.jpg')}
                    />
                    <View style={styles.box}>
                        <Button
                            buttonStyle={styles.test}
                            title='Тесты'
                            onPress={this.showModalClick}
                        />
                        <View style={{
                            height: this.state.heightModal,
                        }}>
                            <Text style={styles.tepping}
                                onPress={this.hendlerClick}
                            >Теппинг тест</Text>
                        </View>
                        <Button
                            buttonStyle={styles.settings}
                            title='Настройки'
                        />
                    </View>
                </Fragment>)
        }
    }
    render () {
        return (
            <View style={styles.container}>
                {
                    this.getCurrentComponent()
                }    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
    },
    box: {
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    test: {
        backgroundColor: '#FF8E00', 
        width: 150,
        height: 30,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 20,
    },
    settings: {
        backgroundColor: '#FF8E00', 
        width: 150,
        height: 30,
        borderRadius: 10,
        alignSelf:'center',
    },
    tepping: {
        backgroundColor: '#FF8E00',
        padding: 5,
        color: 'white',
    }
  });