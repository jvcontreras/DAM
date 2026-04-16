import React from "react";
import { View } from "react-native";
import { ButtonRow } from "../../molecules/ButtonRow/ButtonRow";

type CalcKeyboardProps = {
  onNumber: (n: string) => void;
  onOperation: (op: string) => void;
  onEqual: () => void;
  onClear: () => void;
};

export const CalcKeyboard: React.FC<CalcKeyboardProps> = ({
  onNumber, onOperation, onEqual, onClear,
}) => {
  return (
    <View>
      <ButtonRow buttons={[
        { label: "7", onPress: () => onNumber("7") },
        { label: "8", onPress: () => onNumber("8") },
        { label: "9", onPress: () => onNumber("9") },
        { label: "/", onPress: () => onOperation("/") },
      ]} />
      <ButtonRow buttons={[
        { label: "4", onPress: () => onNumber("4") },
        { label: "5", onPress: () => onNumber("5") },
        { label: "6", onPress: () => onNumber("6") },
        { label: "*", onPress: () => onOperation("*") },
      ]} />
      <ButtonRow buttons={[
        { label: "1", onPress: () => onNumber("1") },
        { label: "2", onPress: () => onNumber("2") },
        { label: "3", onPress: () => onNumber("3") },
        { label: "-", onPress: () => onOperation("-") },
      ]} />
      <ButtonRow buttons={[
        { label: "0", onPress: () => onNumber("0") },
        { label: "=", onPress: onEqual },
        { label: "C", onPress: onClear },
        { label: "+", onPress: () => onOperation("+") },
      ]} />
    </View>
  );
};