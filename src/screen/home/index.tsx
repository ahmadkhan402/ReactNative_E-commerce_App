import React from "react";
import { View, Text, FlatList } from "react-native";
import Header from "../../Components/header";
import { ScreenWrapper } from "react-native-screen-wrapper";
import Search from "../../Components/SearchBar";
import ImgSwiper from "../../Components/swiper";
import { categoryItem } from "../../utils/Data";
export default function Home() {
  const renderItem = (item: any) => (
    <View>
      <Text style={{ color: "#fff", backgroundColor: "red" }}>
        {item.item.name}
      </Text>
    </View>
  );
  return (
    <ScreenWrapper>
      <Header title="Ahmad Creation" />
      <Search />
      <ImgSwiper />

      <FlatList
        data={categoryItem}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        horizontal
      />
    </ScreenWrapper>
  );
}
