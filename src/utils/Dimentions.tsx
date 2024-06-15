import { Dimensions } from "react-native";

const Width = (num: number) => {
  const fullwidth = Dimensions.get("window").width;
  if (num >= 100) {
    return fullwidth;
  } else if (num <= 0) return 0;
  else {
    return fullwidth * (num / 100);
  }
};
const Height = (num: number) => {
  const fullwidth = Dimensions.get("window").height;
  if (num >= 100) {
    return fullwidth;
  } else if (num <= 0) return 0;
  else {
    return fullwidth * (num / 100);
  }
};

export { Width, Height };
