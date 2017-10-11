/**
 * Created by yuhogyun on 2017. 9. 6..
 */

/** External dependencies **/
import { Dimensions, Platform, StatusBar } from 'react-native'

/** Internal Dependency **/

export const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;