import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppColor from "../../utils/AppCollors";
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: Width(100),
    height: Height(58),
    resizeMode: "stretch",
  },
  textView: {
    alignItems: "center",
    marginTop: Height(5),
  },
  title: {
    width: Width(74),
    fontSize: 26,
    textAlign: "center",
    fontWeight: "800",
  },
  des: {
    marginTop: Height(2),
    width: Width(74),
    fontSize: 20,
    textAlign: "center",
    color: "grey",
  },
  btnView: {
    marginTop: Height(5),
  },
});

export default styles;
