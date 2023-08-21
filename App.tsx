import { SafeAreaView, Text, View } from "react-native";
import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";
import {
  useFonts,
  MavenPro_400Regular,
  MavenPro_500Medium,
  MavenPro_600SemiBold,
  MavenPro_700Bold,
  MavenPro_800ExtraBold,
  MavenPro_900Black,
} from "@expo-google-fonts/maven-pro";

export default function App() {
  const [isLoaded] = useFonts({
    MavenPro_400Regular,
    MavenPro_500Medium,
    MavenPro_600SemiBold,
    MavenPro_700Bold,
    MavenPro_800ExtraBold,
    MavenPro_900Black,
  });

  if (!isLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" translucent={false} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}
