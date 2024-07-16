import React from "react";
import { View, Text } from "react-native";
import Header from "../../Components/header";
import { ScreenWrapper } from "react-native-screen-wrapper";
import Search from "../../Components/SearchBar";
import ImgSwiper from "../../Components/swiper";
export default function Home() {
  return (
    <ScreenWrapper>
      <Header title="Ahmad Creation" />
      <Search />
      <ImgSwiper />
    </ScreenWrapper>
  );
}
