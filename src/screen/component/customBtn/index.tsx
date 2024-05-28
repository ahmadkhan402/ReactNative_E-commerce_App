import {
  View,
  Text,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}
export default function CustomButton({ text, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
