import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CalcKeyboard } from "../organisms/CalcKeyboard/CalcKeyboard";
import { colors } from "../../themes/colors";
import { space } from "../../themes/space";

export const CalculateScreen: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  // useEffect para registrar cambios en el display (efecto secundario)
  useEffect(() => {
    console.log("Display actualizado:", display);
  }, [display]);

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === "0" ? num : prev + num);
  };

  const handleOperation = (op: string) => {
    setFirstNumber(parseInt(display));
    setOperation(op);
    setDisplay("0");
  };

  const calculate = () => {
    if (firstNumber === null || operation === null) return;
    const second = parseFloat(display);
    let result = 0;

    if (operation === "+") result = firstNumber + second;
    if (operation === "-") result = firstNumber - second;
    if (operation === "*") result = firstNumber * second;
    if (operation === "/") result = second !== 0 ? firstNumber / second : 0;

    setDisplay(result.toString());
    setFirstNumber(null);
    setOperation(null);
  };

  const clear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperation(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <CalcKeyboard
        onNumber={handleNumber}
        onOperation={handleOperation}
        onEqual={calculate}
        onClear={clear}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center",
    backgroundColor: colors.background.default },
  display: { fontSize: 48, marginBottom: space.xxl, color: colors.text.primary },
});