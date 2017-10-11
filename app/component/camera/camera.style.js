/**
 * Copyright (c) 2017 Team Mondrian. All Rights Reserved.
 * @flow
 * @author yuhogyun
 */

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';

/** Internal Dependency **/
const {width, height, scale} = Dimensions.get('window')

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1
    },
    preview: {
        flex: 1,
        backgroundColor: 'pink'
    },
    capture: {
        position: 'absolute',
        // backgroundColor: 'rgba(100,0,0,1)',
        // borderRadius: 1
    },
    outCircle: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 500,
        backgroundColor: 'rgba(80,80,80,0.5)',
        marginBottom: 50,
    },
    circle: {
        flex: 0.5,
        width: 50,
        borderRadius: 500,
        backgroundColor: 'white',
        alignSelf: 'center',
    }
});
