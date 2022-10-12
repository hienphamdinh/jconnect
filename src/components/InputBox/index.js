import React, {memo, useState, useCallback} from 'react';
import {View, TextInput, Text, TouchableOpacity, FlatList} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Popup, {AnimationType} from 'components/Popup';
import {listProvinceVietNam} from 'constants/Location';
import {KeyExtractor} from 'utils/ListHepler';
import dayjs from 'dayjs';
import styles from './styles';

const InputBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error,
  ...otherProps
}) => {
  return (
    <View style={[styles.boxWrapper, style]}>
      <View style={[styles.inputBox, error && styles.error]}>
        {title && (
          <Text style={[styles.inputLabel, labelStyle]}>
            {title}
            {requireValue && <Text style={styles.star}>*</Text>}
          </Text>
        )}
        <TextInput style={[styles.input, inputStyle]} {...otherProps} />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export const DateInputBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error = false,
  onFocus,
  value,
  onChangeDate,
  placeholder,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const valueToDate = () => {
    const date = new Date();
    if (!value) {
      return date;
    }
    const values = value.split('/');
    date.setDate(Number(values[0]));
    date.setMonth(Number(values[1]) - 1);
    date.setFullYear(Number(values[2]));
    return date;
  };
  return (
    <View style={[styles.boxWrapper, style]}>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
          onFocus && onFocus();
        }}
        style={[styles.inputBox, error && styles.error]}>
        {title && (
          <Text style={[styles.inputLabel, labelStyle]}>
            {title}
            {requireValue && <Text style={styles.star}>*</Text>}
          </Text>
        )}
        <View style={[styles.input, inputStyle]} {...otherProps}>
          {value ? (
            <Text style={styles.dateInput}>{value}</Text>
          ) : (
            <Text>{placeholder}</Text>
          )}
        </View>
        <Popup
          style={styles.popupDate}
          visible={show}
          showHeader
          title="Select date"
          onClose={() => setShow(false)}>
          <DatePicker
            style={styles.datePicker}
            open={show}
            maximumDate={new Date()}
            mode="date"
            date={valueToDate()}
            onDateChange={date => {
              onChangeDate(dayjs(date).format('DD/MM/YYYY'));
            }}
            onCancel={() => {}}
            androidVariant={'iosClone'}
          />
        </Popup>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export const LocationInputBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error = false,
  onFocus,
  value,
  onSelect,
  placeholder,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            onSelect(item);
            onClose && onClose();
          }}>
          <Text>{item}</Text>
        </TouchableOpacity>
      );
    },
    [onClose, onSelect],
  );

  return (
    <View style={[styles.boxWrapper, style]}>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
          onFocus && onFocus();
        }}
        style={[styles.inputBox, error && styles.error]}>
        {title && (
          <Text style={[styles.inputLabel, labelStyle]}>
            {title}
            {requireValue && <Text style={styles.star}>*</Text>}
          </Text>
        )}
        <View style={[styles.input, inputStyle]} {...otherProps}>
          {value ? (
            <Text style={styles.dateInput}>{value}</Text>
          ) : (
            <Text>{placeholder}</Text>
          )}
        </View>
        <Popup visible={show} onClose={onClose} showHeader>
          <FlatList
            keyExtractor={KeyExtractor.extractor}
            data={listProvinceVietNam}
            contentContainerStyle={styles.contentContainerStyle}
            style={styles.list}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </Popup>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default memo(InputBox);
