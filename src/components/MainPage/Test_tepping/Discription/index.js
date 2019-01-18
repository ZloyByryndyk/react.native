import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Discription extends React.Component {
    state = {
        status: 'Старт',
        timer: 5,
        counts: {
            s0: 0,
            s1: 0,
            s2: 0,
            s3: 0,
            s4: 0,
            s5: 0,
        },
        curentSpinner:0,
    }


    hendlerStartTimer = () => {
        const time = this.state.timer

        this.setState({ status: time }, () => {
            this.tic()     
        })
    }

    tic = () => {

        if (this.timer) return;
        
        this.timer = setInterval(() => {
            const time = this.state.timer
            const currentTimer = time - 1;

            this.setState({ timer: currentTimer, status: currentTimer },
                () => {
                    if (time <= 1) {
                        clearInterval(this.timer)
                        delete this.timer;
                        console.log(this.state.counts)
                        const countKeys = Object.keys(this.state.counts).length;
                        const currentSpinner = this.state.curentSpinner;
                        
                        if (countKeys - 1 > currentSpinner) {
                            this.setState({
                                timer: 5,
                                status: 'Старт',
                                curentSpinner: currentSpinner + 1,
                            }) 
                        }
                        if (currentSpinner + 1 > countKeys) {
                                console.log(currentSpinner,countKeys)
                                this.props.switchPage(0)
                        }
                    }
            })
        }, 1000)
    }

    clicker = () => {
        const { counts, curentSpinner, timer} = this.state
        
        if (timer <=0)  return;
        counts[`s${curentSpinner}`] = counts[`s${curentSpinner}`]+1
        this.setState (counts)
    }

    render() {
        const { counts, curentSpinner } = this.state
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../../image/page1.jpg')}
                />
                <View style={styles.box1}>
                    <Text style={styles.slot}>1</Text>
                    <Text style={styles.slot}>2</Text>
                    <Text style={styles.slot}>3</Text>
                    <Text style={styles.slot}>4</Text>
                    <Text style={styles.slot}>5</Text>
                    <Text style={styles.slot}>6</Text>
                </View>
                <View><Text>{counts[`s${curentSpinner}`]}</Text></View>
                <View style={styles.box2}>
                    <Text style={styles.timer} onPress={this.hendlerStartTimer}>{this.state.status}</Text>
                </View>
                <View style={styles.box3}>
                    <Button
                        buttonStyle={styles.click}
                        title='' 
                        onPress={this.clicker}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        // flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    box2: {
        // flex: 3,
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    box3: {
        // flex: 5,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    slot: {
        backgroundColor: '#FF8E00',
        padding: 10,
        color: 'white',
        borderColor: 'black',
        borderWidth: 2,
        margin: 15,
        height: 50,
    },
    timer: {
        backgroundColor: '#FF8E00',
        padding: 10,
        color: 'white',
        width: '30%',
        height: '30%',
        borderColor: 'black',
        borderWidth: 2,
        
        fontSize: 30,
        
        textAlign: 'center',
        
    },
    image: {
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
    },
    click: {
        backgroundColor: '#FF8E00', 
        width: '90%',
        height: '70%',
        borderRadius: 10,
    },
  });