import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {View} from 'react-native-animatable';
import styles from './styles';

class Container extends PureComponent {
  render() {
    const {behavior, style, notSafeArea, isPadding, paddingStyle, children} =
      this.props;

    const padding = isPadding ? paddingStyle : {};
    return (
      <KeyboardAvoidingView
        behavior={behavior}
        style={[styles.container, style]}>
        {notSafeArea ? (
          <View style={{flex: 1}}>{children}</View>
        ) : (
          <SafeAreaView style={[styles.container, padding]}>
            {children}
          </SafeAreaView>
        )}
      </KeyboardAvoidingView>
    );
  }
}

Container.defaultProps = {
  isPadding: false,
  notSafeArea: false,
  content: 'dark-content',
  translucent: Platform.select({
    android: true,
    ios: true,
  }),
  behavior: Platform.select({
    android: 'height',
    ios: 'padding',
  }),
  statusBarColor: Platform.select({
    android: 'transparent',
    ios: 'white',
  }),
  style: {},
  paddingStyle: Platform.select({
    android: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    ios: {
      marginLeft: 20,
      marginRight: 20,
    },
  }),
  statusBarChange: null,
  versionTextShow: false,
  floatButtonShow: false,
};

Container.propTypes = {
  backgroundColor: PropTypes.string,
  content: PropTypes.string,
  statusBarColor: PropTypes.string,
  style: PropTypes.object,
  isPadding: PropTypes.bool,
  notSafeArea: PropTypes.bool,
  statusBarChange: PropTypes.bool,
};

export default Container;
