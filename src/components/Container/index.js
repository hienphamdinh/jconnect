import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {View} from 'react-native-animatable';
import BackComponent from 'components/BackComponent';
import styles from './styles';

class Container extends PureComponent {
  render() {
    const {
      behavior,
      style,
      notSafeArea,
      isPadding,
      paddingStyle,
      children,
      showBack,
    } = this.props;

    const padding = isPadding ? paddingStyle : {};
    return (
      <KeyboardAvoidingView
        // behavior={
        //   behavior || Platform.select({android: undefined, ios: 'padding'})
        // }
        // // enabled={Platform.OS === 'ios'}

        // enabled
        behavior={'padding'}
        enabled={Platform.OS === 'ios'}
        style={[styles.container, style]}>
        {notSafeArea ? (
          <View style={styles.container}>
            {showBack && <BackComponent />}
            {children}
          </View>
        ) : (
          <SafeAreaView style={[styles.container, padding]}>
            {showBack && <BackComponent />}
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
