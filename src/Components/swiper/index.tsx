import React from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./style";
import { Height, Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";
import Button from "../CustomButton";

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
        prevButton={<Text></Text>}
        nextButton={<Text></Text>}
      >
        <View style={styles.slide1}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/side-view-fashionable-beautiful-woman-shirt-holding-want-buying-elegant-red-dress-brunette-girl-with-long-hair-choosing-look-evening-spanding-time-shoppinh-mall_132075-12219.jpg?t=st=1721132637~exp=1721136237~hmac=38dd7ddedfacab9e3388e37a635179923483b0b25e2883c45050ce72544899b3&w=900",
            }}
            style={styles.img}
          />
          <Button
            label="Buy Now"
            onpress={() => {
              console.log("Buy Now");
            }}
            style={styles.buyBtn}
            txtStyle={styles.txtStyle}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={require("./../../assets/images/SwiperImg2.png")}
            style={styles.img}
          />
          <Button
            label="Buy Now"
            onpress={() => {
              console.log("Buy Now");
            }}
            style={styles.buyBtn}
            txtStyle={styles.txtStyle}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={require("./../../assets/images/SwiperImg3.png")}
            style={styles.img}
          />
          <Button
            label="Buy Now"
            onpress={() => {
              console.log("Buy Now");
            }}
            style={styles.buyBtn}
            txtStyle={styles.txtStyle}
          />
        </View>
      </Swiper>
    </View>
  );
}
