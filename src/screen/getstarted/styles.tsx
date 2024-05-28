import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  contentView: {
    position: "absolute",
    bottom: Height(5),
    width: Width(100),
    alignItems: "center",
  },
  textView: {
    width: Width(90),
    alignItems: "center",
  },
  titleText: {
    marginVertical: Height(2),
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    width: Width(60),
  },
  desText: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    width: Width(60),
  },
  btn: {
    marginTop: Height(10),
    elevation: 5,
  },
});

export default styles;
