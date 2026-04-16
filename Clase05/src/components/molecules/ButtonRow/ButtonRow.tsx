import React from "react";
import { View, StyleSheet } from "react-native";
import { ButtonCalc } from "../../atoms/ButtonCalc/ButtonCalc";

type ButtonRowProps = {
  buttons: { label: string; onPress: () => void }[];
};

export const ButtonRow: React.FC<ButtonRowProps> = ({ buttons }) => {
  return (
    <View style={styles.row}>
      {buttons.map((btn) => (
        <ButtonCalc key={btn.label} label={btn.label} onPress={btn.onPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
});