/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React, {Component, PropTypes} from 'react'
import {
    Text,
    View
} from 'react-native'

/** Internal dependencies **/
import styles from './main.style'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>
                    {'Hello world'}
                </Text>
            </View>
        );
    }
}

export default Main;
