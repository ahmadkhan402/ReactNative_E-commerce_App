import React from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./style";
import { Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";

export default function ImgSwiper() {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={true}
        autoplay={true}
        showsPagination={true}
        paginationStyle={{
          flex: 1,
          justifyContent: "flex-end",
          paddingHorizontal: Width(5),
        }}
        dotColor={AppColor.lightgrey}
        activeDotColor="#fff"
        activeDotStyle={{
          paddingHorizontal: Width(2.5),
        }}
        showsVerticalScrollIndicator={false}
        autoplayTimeout={5}
      >
        <View style={styles.slide1}>
          <Image
            source={require("./../../assets/images/SwiperImg1.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={require("./../../assets/images/SwiperImg2.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={require("./../../assets/images/SwiperImg3.png")}
            style={styles.img}
          />
        </View>
      </Swiper>
    </View>
  );
}
