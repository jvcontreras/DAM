import { StyleSheet } from "react-native";
import { space } from "../../../themes/space";
import { colors } from "../../../themes/colors";

export const stylesButtonCalc = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.main,
    padding: space.l,
    margin: space.s,
    borderRadius: 10,
    width: 70,
    alignItems: "center",
  },
  labelText: {
    color: colors.background.paper,
    fontSize: space.xl,
    fontWeight: "bold",
  },
});