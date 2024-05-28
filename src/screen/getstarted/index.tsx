import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import CustomButton from "../component/customBtn";

export default function GetStarted() {
  return (
    <ImageBackground
      source={require("../../../assets/bg1.jpg")}
      style={styles.parentView}
      resizeMode="stretch"
    >
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <Text style={styles.titleText}>
            Find your best outfit and looks great
          </Text>
          <Text style={styles.desText}>
            Find wide variety of latest clothing styles only here.And define
            your style
          </Text>
        </View>
        <CustomButton
          text="Get Started"
          onPress={() => {}}
          style={styles.btn}
        />
      </View>
    </ImageBackground>
  );
}
