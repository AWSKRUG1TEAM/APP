/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

/** Internal dependencies **/
import AppNavigator from './app/AppNavigator'

export default class AwesomeProject extends Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);