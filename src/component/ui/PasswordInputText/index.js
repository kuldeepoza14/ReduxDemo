/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FloatingInputText from "../FloatingInputText";
import {Color} from "../../../utils/color";

export default class PasswordInputText extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            icEye: 'visibility-off',
            password: true

        };
    }

    changePwdType = () => {

        if (this.state.password) {
            this.setState( {
                icEye: 'visibility',
                password: false
            })
        } else {
            this.setState({
                icEye: 'visibility-off',
                password: true
            })
        }

    };

    render() {
        return (
            <View style={styles.itPass}>
                <FloatingInputText
                    {...this.props}
                    secureTextEntry={this.state.password} tfLabel='Password'/>
                <Icon
                    style={styles.icon}
                    name={this.state.icEye}
                    color={Color.PRIMARY}
                    size={25}
                    onPress={this.changePwdType}
                />
            </View>


        );
    }
}

