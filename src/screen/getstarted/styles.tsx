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
    height: Height(53),
    resizeMode: "contain",
  },
  textView: {
    alignItems: "center",
    marginTop: Height(8),
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
    marginTop: Height(7),
  },
});

export default styles;
