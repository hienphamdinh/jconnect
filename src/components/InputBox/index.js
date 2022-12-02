import React, {memo, useState, useCallback, useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity, FlatList} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Popup from 'components/Popup';
import {listProvinceVietNam} from 'constants/Location';
import {KeyExtractor} from 'utils/ListHepler';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import HTMLView from 'react-native-htmlview';
import dayjs from 'dayjs';
import styles from './styles';
import get from 'lodash/get';
import {
  formatCurrencyWithDot,
  convertDotCurrencyToNumber,
} from 'utils/CurrencyHelper';

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

export const SalaryBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  onChangeText,
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
        <TextInput
          style={[styles.input, inputStyle]}
          maxLength={11}
          onChangeText={text => {
            onChangeText(convertDotCurrencyToNumber(text));
          }}
          {...otherProps}
        />
        <Text style={styles.prefix}>VND</Text>
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
  const [date, setDate] = useState(new Date());

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
        <View style={[styles.input, inputStyle]}>
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
            mode="date"
            date={date}
            onDateChange={resDate => {
              setDate(resDate);
              onChangeDate(dayjs(resDate).format('YYYY/MM/DD'));
            }}
            onCancel={() => {}}
            androidVariant={'iosClone'}
            {...otherProps}
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

export const EditorInputBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error = false,
  onFocus,
  value,
  onChange,
  placeholder,
  ...otherProps
}) => {
  const refEditor = useRef();
  const [show, setShow] = useState(false);

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
        <View style={[styles.htmlView, inputStyle]} {...otherProps}>
          <HTMLView value={value || placeholder} />
        </View>
        <Popup
          title={title}
          style={styles.popupEditor}
          visible={show}
          showHeader
          renderLeft={() => {
            return value ? (
              <TouchableOpacity
                onPress={() => {
                  refEditor.current.setContentHTML('');
                  onChange('');
                }}>
                <Text style={styles.clearText}>Clear all</Text>
              </TouchableOpacity>
            ) : null;
          }}
          onClose={() => setShow(false)}>
          <RichEditor
            ref={refEditor}
            placeholder="Start writing here..."
            initialContentHTML={value}
            style={styles.editor}
            onChange={content => onChange(content)}
          />
          <RichToolbar
            editor={refEditor}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.setUnderline,
            ]}
          />
        </Popup>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export const BaseInputBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error = false,
  onFocus,
  onSelect,
  placeholder,
  showKey,
  selectKey,
  listData = [],
  popupTitle,
  value,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const [valueShow, setValueShow] = useState(value);
  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            onSelect(selectKey ? get(item, selectKey) : item);
            setValueShow(showKey ? get(item, showKey) : item);
            onClose && onClose();
          }}>
          <Text>{showKey ? get(item, showKey) : item}</Text>
        </TouchableOpacity>
      );
    },
    [onClose, onSelect, selectKey, showKey],
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
          {valueShow ? (
            <Text style={styles.dateInput}>{valueShow}</Text>
          ) : (
            <Text>{placeholder}</Text>
          )}
        </View>
        <Popup visible={show} onClose={onClose} showHeader title={popupTitle}>
          <FlatList
            keyExtractor={KeyExtractor.extractor}
            data={listData}
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
export const CategoryBox = ({
  title,
  requireValue = false,
  style,
  labelStyle,
  inputStyle,
  error = false,
  onFocus,
  onSelect,
  placeholder,
  listData = [],
  popupTitle,
  value = {},
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  const [valueShow, setValueShow] = useState(get(value, 'title', ''));
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
            setValueShow(get(item, 'title'));
            onClose && onClose();
          }}>
          <Text>{get(item, 'title')}</Text>
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
          {valueShow ? (
            <Text style={styles.dateInput}>{valueShow}</Text>
          ) : (
            <Text>{placeholder}</Text>
          )}
        </View>
        <Popup visible={show} onClose={onClose} showHeader title={popupTitle}>
          <FlatList
            keyExtractor={KeyExtractor.extractor}
            data={listData}
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
