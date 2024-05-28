import { Dimensions } from "react-native";

const Width = (num: number) => {
  const fullwidth = Dimensions.get("window").width;
  if (num > 100) {
    return fullwidth;
  } else {
    return num * (fullwidth / 100);
  }
};

const Height = (num: number) => {
  const fullwidth = Dimensions.get("window").height;
  if (num > 100) {
    return fullwidth;
  } else {
    return num * (fullwidth / 100);
  }
};

export { Width, Height };
