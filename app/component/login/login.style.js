/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import { StyleSheet, Platform } from 'react-native'

/** Internal dependencies **/


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'black'
    },
    halfContainer: {
        flex: 0.6,
        marginLeft: 20,
        marginRight: 20
    },
    mainTitle: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 30,
        color: 'white'
    },
    forms: {
        marginTop: 20
    },
    firstSubTitle: {
        color: 'white',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 10
    },
    secondSubTitle: {
        marginLeft: 20,
        marginTop: 10,
        color: 'white',
    },
    background: {
        flex: 0.4,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});