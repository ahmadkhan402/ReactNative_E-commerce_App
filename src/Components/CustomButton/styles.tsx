import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";

const styles = StyleSheet.create({
  btnStyle: {
    width: Width(90),
    height: Height(7),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColor.primery,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
  },
});
export default styles;
