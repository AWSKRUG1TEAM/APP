/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import React, {Component, PropTypes} from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Camera from 'react-native-camera';
// import moment from 'moment'



/** Internal dependencies **/
import styles, {width} from './main.style'
import Header from './../../common/ui/header/header'

class Main extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate;
        this.state = {
            scrollViewOpacity: 0
        }
    }



    componentDidMount() {
        setTimeout(() => {
            this._scrollView.scrollTo({x: width, animated: false});
        }, 0);
        // trick:
    }

    _onPressLeftBtn = () => {
        // Todo: Drawer
        // this.navigate.navigation('Dr', {name: 'fromMain'});
    }

    _onPressRightBtn = () => {
        const { navigate } = this.props.navigation; // Todo: react props문법, ref: https://facebook.github.io/react-native/docs/props.html
        navigate('Camera', {name: 'fromMain'}); // Todo: ref: https://facebook.github.io/react-native/docs/navigation.html
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Header title={'Date here'} onPressLeftBtn={this._onPressLeftBtn} onPressRightBtn={this._onPressRightBtn}/>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true} pagingEnabled={true} style={{flex: 1}} ref={ref => this._scrollView = ref}>
                    <View style={styles.innerContainer}>
                        <Text>Page 1</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Text>Page 2</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Text>Page 3</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Main;
