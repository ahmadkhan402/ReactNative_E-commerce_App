import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { EvilIcons } from "@expo/vector-icons";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.parentView}>
      <TouchableOpacity style={styles.searchBtn}>
        <EvilIcons name="search" size={35} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        onChangeText={(e) => setSearch(e)}
        style={styles.inputText}
        multiline={true}
      />
    </View>
  );
}
