/**
 *
 * @providesModule JFToast
 */

'use strict';

import React, {Component, StyleSheet, View, Animated, Easing, Text} from 'react-native';
class JFToast extends Component {
    render() {
        return (
            <Text style={{color: 'black',backgroundColor: 'red', width: 300, height: 30}}>
                "JFToast 需要实现，用于测试"
            </Text>
        );
    }
};

module.exports = JFToast;