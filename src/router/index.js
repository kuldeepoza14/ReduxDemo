import {StackNavigator} from "react-navigation";
import {Color} from "../utils/color";
import MainForm from "../screen/MainForm";
import FormDetail from "../screen/FormDetail";


export const AppNavigator = StackNavigator({
    MainForm: {
        screen: MainForm,
        navigationOptions: {
            title: 'Home',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },
    FormDetail: {
        screen: FormDetail,
        navigationOptions: {
            title: 'Detail',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY
            },
        }
    },


});

