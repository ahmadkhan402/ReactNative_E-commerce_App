import { StyleSheet } from "react-native";
import AppColor from "../../../utils/AppCollors";
import { Height, Width } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  btnContainer: {
    width: Width(90),
    height: Height(7),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: AppColor.primery,
  },
  btnText: {
    color: AppColor.dimwhite,
    fontSize: 18,
  },
});

export default styles;
