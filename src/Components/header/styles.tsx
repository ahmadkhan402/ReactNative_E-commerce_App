import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";

const styles = StyleSheet.create({
  parentView: {
    width: Width(100),
    height: Height(7),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Height(1),
  },
  miniContainer: {
    width: Width(22),
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
  },
});
export default styles;
