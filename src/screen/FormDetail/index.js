import {Component} from "react";
import * as React from "react";
import {Alert, ScrollView, Text, View} from "react-native";
import FloatingInputText from "../../component/ui/FloatingInputText";
import styles from "../MainForm/styles";
import RoundButton from "../../component/ui/RoundButton";
import {store} from "../../redux/store";
import {setUser} from "../../redux/action";
import {validation} from "../../utils/validate";
import {connect} from "react-redux";
 class FormDetail extends Component<{}> {
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
    onclick = () => {

     /*   let nameErr = validation("name", this.state.name);
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
            const userData = {
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                city: this.state.city,
            };
        /*    this.setState({
                emailError: '',
                cityError: '',
                numError: '',
                nameError: ''
            });*/
            store.dispatch(setUser(userData));
      //  }
    };


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{marginTop:30}}>
                        <Text>{this.props.user.name}</Text>
                        <Text>{store.getState().user.email}</Text>
                        <Text>{store.getState().user.number}</Text>
                        <Text>{store.getState().user.city}</Text>
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

                            <RoundButton onClick={this.onclick}
                                         name="UPDATE"
                                         btnPadding={7}
                                         btnHeight={35}
                                         btnWidth={250}
                                         btnMarTop={30}
                                         Nor={true}
                            />

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


export default connect(mapStateToProps)(FormDetail)