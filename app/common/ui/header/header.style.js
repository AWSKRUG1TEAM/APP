/**
 * Created by yuhogyun on 2017. 10. 6.
 */

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {StatusBarHeight} from './../../constant/defaultValue'
import Colors from './../../constant/colors'
import FontWeights from '../../constant/fontWeights'

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

/** StyleSheet **/
export default StyleSheet.create({
    header: {
        height: 52,
        width: width,
        marginTop: StatusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
    },
    mainTitle: {
        fontSize: 17,
        color: Colors.gray,
        letterSpacing: -0.1,
        fontWeight: FontWeights.medium
    },
    leftBtn: {
        position: 'absolute',
        left: 13
    },
    rightBtn: {
        position: 'absolute',
        right: 13
    },
    imgContainer: {
        width: 34,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 24,
        height: 24,
        opacity: 0.7
    }
});
