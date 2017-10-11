/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React, { Component, PropTypes } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/** Internal dependencies **/
import styles, {height, weight} from './header.style';

const LEFT_BTN = 'leftBtn';
const RIGHT_BTN = 'rightBtn';

export default class Header extends Component {
    static defaultProps = {
        title: '',
        onPressLeftBtn: () => {},
        onPressRightBtn: () => {},
        back: false
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }

    renderBtn(btnType) {
        if(btnType === LEFT_BTN) { // Nav || Back
            if(this.props.back) {
                return (
                    <TouchableOpacity onPress={() => {this.props.onPressLeftBtn()}}>
                        <View style={styles.imgContainer}>
                            <Icon name="angle-left" size={30} color="#000000"/>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity onPress={() => {this.props.onPressLeftBtn()}}>
                        <View style={styles.imgContainer}>
                            <Icon name="navicon" size={30} color="#000000"/>
                        </View>
                    </TouchableOpacity>
                )
            }
        } else if(!this.props.back && btnType === RIGHT_BTN) { // Camera
            return (
                <TouchableOpacity onPress={() => {this.props.onPressRightBtn()}}>
                    <View style={styles.imgContainer}>
                        <Icon name="camera" size={30} color="#000000"/>
                    </View>
                </TouchableOpacity>
            )
        } // Back
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.mainTitle}>{this.props.title}</Text>
                <View style={styles.leftBtn}>
                    {this.renderBtn(LEFT_BTN)}
                </View>
                <View style={styles.rightBtn}>
                    {this.props.onPressRightBtn && this.renderBtn(RIGHT_BTN)}
                </View>
            </View>
        )
    }
}