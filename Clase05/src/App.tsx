import React from "react";
import { SafeAreaView } from "react-native";
import { CalculateScreen } from "./components/screens/CalculateScreen";
import { appStyles } from "./App.style";

const App = () => {
  return (
    <SafeAreaView style={appStyles.safeArea}>
      <CalculateScreen />
    </SafeAreaView>
  );
};

export default App;