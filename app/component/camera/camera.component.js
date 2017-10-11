/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import NativeCamera from 'react-native-camera';
import Header from './../../common/ui/header/header'
import {NavigationActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/EvilIcons';


/** Internal Dependency **/
import styles from './camera.style'

export default class Camera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            handleFocusChanged: () => {}
        }
    }

    _onPressLeftBtn = () => {
        const backAction = NavigationActions.back();
        this.props.navigation.dispatch(backAction)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title={'Camera'} back={true} onPressLeftBtn={this._onPressLeftBtn}/>
                <View style={styles.cameraContainer}>
                    <NativeCamera
                        ref={(cam) => {
                            this.camera = cam;
                        }}
                        style={styles.preview}
                        aspect={NativeCamera.constants.Aspect.fill}
                        defaultOnFocusComponent={true}
                        onFocusChanged={ this.state.handleFocusChanged }
                    >
                    </NativeCamera>
                    <TouchableHighlight onPress={() => {this.takePicture()}}>
                    <View style={styles.outCircle}>
                        <View style={styles.circle}>

                        </View>
                    </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options}).then((data) => {
            console.log(data);
            this._onPressLeftBtn();
        }).catch(err => {
            console.error(err)
        });
    }
}