/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

/** Internal dependencies **/
import Main from './component/main/main.component'
import Login from './component/login/login.component'
import Camera from './component/camera/camera.component'

const AppNavigator = StackNavigator({
    Login: {
        name: 'Login Screen',
        description: 'App Login screen',
        screen: Login,
    },
    Main: {
        name: 'Welcome Screen',
        description: 'App welcome screen',
        screen: Main,
    },
    Camera: {
        name: 'Camera Screen',
        description: 'App Camera screen',
        screen: Camera,

    }
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default AppNavigator;