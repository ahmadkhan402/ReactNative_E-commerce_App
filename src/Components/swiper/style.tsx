import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";

const styles = StyleSheet.create({
  container: {
    marginVertical: Height(3),
    width: Width(90),
    height: Height(30),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  img: {
    borderRadius: 20,
    width: Width(90),
    height: Height(30),
    resizeMode: "cover",
  },
  buyBtn: {
    position: "absolute",
    width: Width(28),
    height: Height(5),
    backgroundColor: AppColor.offwhite,
    bottom: 25,
    left: 25,
  },
  txtStyle: {
    color: AppColor.primery,
  },
});
export default styles;
