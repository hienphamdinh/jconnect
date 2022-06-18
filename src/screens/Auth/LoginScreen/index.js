import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthAction from "store/auth/action";
import {
  TouchableOpacity,
  TextInput,
  Text,
  SafeAreaView,
  View
} from "react-native";
import I18n from "locales";
import { changeLanguage } from "locales/I18n";
export default function LoginScreen() {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.auth.phone);
  return (
    <View style={{ flex: 1 }}>
      <Text>{I18n.t("Hello")}</Text>
      <Text>{phone || ""}</Text>
      <TextInput placeholder="Nhập mật khẩu vào" />
      <TouchableOpacity
        onPress={() => {
          dispatch(AuthAction.login("09711086998918", "Hiển"));
          changeLanguage("vi");
        }}
      >
        <Text>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
}
