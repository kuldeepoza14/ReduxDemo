/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from './styles';
import {
    Alert,
    ScrollView, Text,
    View,
} from 'react-native';
import RoundButton from "../../component/ui/RoundButton";
import FloatingInputText from "../../component/ui/FloatingInputText";
import {connect} from "react-redux";
import {setUser} from "../../redux/action";

class MainForm extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            city: '',
            cityError: '',
            name: '',
            nameError: '',
            number: '',
            numError: ''
        };

    }

    //  userData = () => {

    /*  let nameErr = validation("name", this.state.name);
      let numErr = validation("number", this.state.number);
      let emailErr = validation("email", this.state.email);
      let cityErr = validation("city", this.state.city);
      if (emailErr != null ||
          cityErr != null ||
          nameErr != null ||
          numErr != null) {
          this.setState({
              emailError: emailErr,
              cityError: cityErr,
              numError: numErr,
              nameError: nameErr
          });
      }
      else {*/

    /*   this.setState({
           emailError: '',
           cityError: '',
           numError: '',
           nameError: ''
       });*/
    // store.dispatch(setUser(userData));

    //  this.props.navigation.navigate('FormDetail')

    //   }
    //  };

    onClickBtn = () => {
        const userData = {
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            city: this.state.city,
        };
        this.props.setClick(userData);
        this.props.navigation.navigate('FormDetail');
    };


    render() {

        return (
            <ScrollView>
                <View style={styles.container}>

                    <View>

                        <View style={styles.newLoginBind}>

                            <FloatingInputText tfLabel='Name'
                                               error={this.state.nameError}
                                               onChangeText={(name) => this.setState({name})}/>

                            <FloatingInputText tfLabel='Email'
                                               error={this.state.emailError}
                                               keyboardType="email-address"
                                               onChangeText={(email) => this.setState({email})}/>

                            <FloatingInputText tfLabel='Phone Number'
                                               error={this.state.numError}
                                               keyboardType="numeric"
                                               onChangeText={(number) => this.setState({number})}/>

                            <FloatingInputText tfLabel='City'
                                               error={this.state.cityError}
                                               onChangeText={(city) => this.setState({city})}/>


                            <RoundButton onClick={this.onClickBtn}
                                         name="SUBMIT"
                                         btnPadding={7}
                                         btnHeight={35}
                                         btnWidth={250}
                                         btnMarTop={30}
                                         Nor={true}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = store => {

    return {
        user: store.user
    }
};


const mapDispatchToProps = dispatch => {

    return {
        setClick: user => {
            dispatch(setUser(user))
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm)