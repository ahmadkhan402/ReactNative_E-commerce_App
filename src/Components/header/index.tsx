import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
interface props {
  title: string;
}

export default function Header({ title }: props) {
  return (
    <View style={styles.parentView}>
      <MaterialIcons name="menu-open" size={32} color="black" />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.miniContainer}>
        <FontAwesome6 name="rocketchat" size={28} color="black" />
        <EvilIcons name="cart" size={33} color="black" />
      </View>
    </View>
  );
}
