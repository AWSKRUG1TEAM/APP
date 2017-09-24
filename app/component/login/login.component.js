/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React, {Component, PropTypes} from 'react'
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

// Todo: ref: https://react-native-training.github.io/react-native-elements/API/HTML_style_headings/
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';



/** Internal dependencies **/
import styles from './login.style'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={() => {}}/>
                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={() => {}}/>
                <Button
                    raised
                    icon={{name: 'done', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Login`}
                    onPress={() => {
                        this.navigateToMain()}
                    }
                    style={{marginTop: 20}}
                />
            </View>
        );
    }

    navigateToMain() {
        const { navigate } = this.props.navigation; // Todo: react props문법, ref: https://facebook.github.io/react-native/docs/props.html
        navigate('Main', {name: 'fromLogin'}); // Todo: ref: https://facebook.github.io/react-native/docs/navigation.html
    }
}

export default Login;
