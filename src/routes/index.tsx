import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../pages/Home";
import { AppProvider } from "../context/AppContext";
import { Splash } from "../pages/Splash";
import { Welcome } from "../pages/Welcome";

export const Routes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <AppProvider>
      <Navigator initialRouteName="Splash">
        <Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </AppProvider>
  );
};
