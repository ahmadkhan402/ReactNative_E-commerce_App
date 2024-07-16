import React from "react";
import { View, Text } from "react-native";
import Header from "../../Components/header";
import { ScreenWrapper } from "react-native-screen-wrapper";
import Search from "../../Components/SearchBar";
export default function Home() {
  return (
    <ScreenWrapper>
      <Header title="Ahmad Creation" />
      <Search />
    </ScreenWrapper>
  );
}
