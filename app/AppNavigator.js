/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

/** Internal dependencies **/
import Main from './component/main/main.component'

const AppNavigator = StackNavigator({
    Main: {
        name: 'Welcome Screen',
        description: 'App welcome screen',
        screen: Main,
    }
});

export default AppNavigator;