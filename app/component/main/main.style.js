/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import { StyleSheet, Platform, Dimensions } from 'react-native'
export const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

/** Internal dependencies **/


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    innerContainer: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});