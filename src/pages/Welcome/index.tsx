import React from "react";
import { Button, Content, SubTitle, TextButton, Title } from "./styles";
import AnimatedLottieView from "lottie-react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Welcome = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Content>
      <AnimatedLottieView
        autoPlay
        style={{
          width: RFValue(250),
          height: RFValue(250),
        }}
        source={require("../../assets/animation/welcome-animation.json")}
      />
      <Title>Olá, seja bem vindo(a) a nossa news letter!</Title>
      <SubTitle>
        Notícias resumidas e diretas para quem, assim como nós, não tem muito
        tempo para atualizar-se sobre o que rola pelo mundo.
      </SubTitle>
      <Button activeOpacity={0.8} onPress={() => navigate("Home")}>
        <TextButton>INICIAR</TextButton>
      </Button>
    </Content>
  );
};
