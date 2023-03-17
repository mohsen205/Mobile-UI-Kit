import React from "react";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <></>;
};

export default App;
