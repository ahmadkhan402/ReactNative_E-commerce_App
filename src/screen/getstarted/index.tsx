import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../Components/CustomButton";
import { Height } from "../../utils/Dimentions";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../route/Routes";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.parentView}>
      <Image
        source={require("./../../../assets/Artboard_1.png")}
        style={styles.img}
      />
      <View style={styles.textView}>
        <Text style={styles.title}>Find your best outfit and looks great</Text>
        <Text style={styles.des}>
          Find wide variety of latest clothing styles only here.And define your
          style
        </Text>

        <Button
          onpress={() => navigation.navigate(ScreenName.Home)}
          style={styles.btnView}
          label="Get Started"
        />
      </View>
    </View>
  );
}
