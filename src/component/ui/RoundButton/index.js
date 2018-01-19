/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import {Color} from "../../../utils/color";

export default class RoundButton extends Component<{}> {

    render() {
        let btnStylesArray = [];
        let height=35, width=250;
        if (this.props.ESm) {
            height = 30;
            width = 150;
        }
        else if (this.props.Sm) {
            height = 30;
            width = 200;
        }
        else if (this.props.Md) {
            height = 35;
            width = 250;
        }
        else if (this.props.Lar) {
            height = 40;
            width = 300;
        }
        else if (this.props.ELar) {
            height = 40;
            width = 350;
        }
        btnStylesArray.push({
            backgroundColor: this.props.btnBgColor,
            borderRadius: 20,
            marginTop: this.props.btnMarTop,
            width: width,
            height: height,
            padding: this.props.btnPadding,

        });
        return (

            <View>
                <TouchableOpacity
                    onPress={this.props.onClick}
                    style={btnStylesArray}
                    activeOpacity={0.8}>
                    <View>
                        <Text
                            style={styles.btnText}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

RoundButton.propTypes = {
    btnWidth: PropTypes.number,
    btnHeight: PropTypes.number,
    btnPadding: PropTypes.number,
    btnBgColor: PropTypes.string,
    btnMarTop: PropTypes.number,
    ESm: PropTypes.bool,
    Sm: PropTypes.bool,
    Md: PropTypes.bool,
    Lar: PropTypes.bool,
    ELar: PropTypes.bool

};
RoundButton.defaultProps = {
    btnWidth: 400,
    btnHeight: 130,
    btnPadding: 8,
    btnBgColor: Color.PRIMARY,
    btnMarTop: 30,
    ESm: false,
    Sm: false,
    Md: false,
    Lar: false,
    ELar: false,
};
