import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {addTodo} from '../actions'

class AddTodo extends Component {
    state={
        text : ''
    }

    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        this.setState({text : ''})

    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="eg. add video"
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', flex: 1, height: 50, padding: 12 }}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}> 
                    <View style={{height : 50, backgroundColor : '#eaeaea', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon
                            name="plus"
                            size={25}
                            style={{color : '#de9595', padding : 10 }}
                        />
                    </View>
                </TouchableOpacity>

            </View> 
        )
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})