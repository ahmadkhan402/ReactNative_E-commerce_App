import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import styles from "./styles";

interface props extends TouchableOpacityProps {
  onpress: () => void;
  label: string;
  style: StyleProp<ViewStyle>;
}
export default function Button({
  onpress = () => {},
  label = "",
  style,
}: props) {
  return (
    <TouchableOpacity onPress={onpress} style={[styles.btnStyle, style]}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}
