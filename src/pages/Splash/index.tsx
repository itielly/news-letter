import React, { useEffect, useRef } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container } from "./styles";
import LottieView from "lottie-react-native";

export const Splash = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const animation = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      navigate("Welcome");
    }, 5000);
  }, []);

  return (
    <Container>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: RFValue(300),
          height: RFValue(300),
        }}
        source={require("../../assets/animation/4.json")}
      />
    </Container>
  );
};
