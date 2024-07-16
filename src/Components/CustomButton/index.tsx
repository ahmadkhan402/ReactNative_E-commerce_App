import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import styles from "./styles";

interface props extends TouchableOpacityProps {
  onpress: () => void;
  label: string;
  style: StyleProp<ViewStyle>;
  txtStyle?: StyleProp<TextStyle> | undefined;
}
export default function Button({
  onpress = () => {},
  label = "",
  style,
  txtStyle,
}: props) {
  return (
    <TouchableOpacity onPress={onpress} style={[styles.btnStyle, style]}>
      <Text style={[styles.btnText, txtStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
