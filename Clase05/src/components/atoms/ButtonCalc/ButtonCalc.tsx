import React from "react";
import { Pressable, Text } from "react-native";
import { stylesButtonCalc } from "./ButtonCalc.style";

type ButtonCalcProps = {
  label: string;
  onPress: () => void;  // corregido: onPress (minúscula)
};

export const ButtonCalc: React.FC<ButtonCalcProps> = ({ label, onPress }) => {
  return (
    <Pressable style={stylesButtonCalc.button} onPress={onPress}>
      <Text style={stylesButtonCalc.labelText}>{label}</Text>
    </Pressable>
  );
};