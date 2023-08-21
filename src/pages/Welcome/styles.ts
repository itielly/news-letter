import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Content = styled.View`
  flex: 1;
  background: ${theme.colors.background_global};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: MavenPro_600SemiBold;
  color: ${theme.colors.text};
  font-size: ${RFValue(30)}px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.text};
  font-size: ${RFValue(18)}px;
  font-family: MavenPro_500Medium;
  text-align: center;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.like};
  width: ${RFValue(150)}px;
  padding: ${RFValue(13)}px;
  border-radius: ${RFValue(5)}px;
  margin-top: ${RFValue(15)}px;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
`;

export const TextButton = styled.Text`
  color: ${theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: MavenPro_700Bold;
  text-align: center;
`;
