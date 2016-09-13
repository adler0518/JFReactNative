'use strict'

import React, {Component, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const defaultProps = {
    backgroundColor: '#1ba9ba',
    borderColor: '#1ba9ba',
    borderWidth: 0,
    borderRadius: 5,
    contentColor: '#ffffff',
    padding: 5,
    fontSize: 12,
    disabled: false,
    disabledOpacity: 0.6,
};

const propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
    backgroundColor: React.PropTypes.string,
    contentColor: React.PropTypes.string,
    fontSize: React.PropTypes.number,
};

class Button extends Component {
    _onPress() {
        const {onPress} = this.props;
        onPress && onPress.apply(this);
    }

    render() {
        const {style, disabled, disabledOpacity, text, backgroundColor, contentColor, fontSize} = this.props;
        let opacity = disabled ? disabledOpacity : 1;
        let buttonStyle = {
            opacity: disabled ? disabledOpacity : 1,
            backgroundColor: backgroundColor,
        };
        let textStyle = {
            color: contentColor || (style && style.contentColor ? style.contentColor : null),
            fontSize: fontSize,
        };

        return (
            <TouchableOpacity activeOpacity={disabled ? 1 : 0.4} onPress={this._onPress.bind(this)} >
                <View style={[styles.container, style, buttonStyle]}>
                    <Text style={[styles.text, textStyle]}>
                        {text || 'Button'}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultProps.backgroundColor,
        borderColor: defaultProps.borderColor,
        borderWidth: defaultProps.borderWidth,
        borderRadius: defaultProps.borderRadius,
        padding: defaultProps.padding,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        color: defaultProps.contentColor,
        fontSize: defaultProps.fontSize,
    }
});

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

module.exports = Button;
