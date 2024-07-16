import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";

const styles = StyleSheet.create({
  parentView: {
    width: Width(90),
    height: Height(10),
    flexDirection: "row",
    backgroundColor: AppColor.lightgrey,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
  searchBtn: {
    width: Width(20),
    height: Height(10),
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    width: Width(70),
    height: Height(10),
    fontSize: 20,
  },
});
export default styles;
