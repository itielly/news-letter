import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Content = styled.View`
  flex: 1;
  background-color: ${theme.colors.background_global};
`;

export const InputComment = styled.TextInput`
  border: 1px solid ${theme.colors.secondary};
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  width: 85%;
  height: ${RFValue(40)}px;
  align-self: center;
  color: ${theme.colors.secondary};
`;

export const ButtonSend = styled.TouchableOpacity`
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  position: absolute;
  right: ${RFValue(10)}px;
  background-color: ${theme.colors.like};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
  height: ${RFValue(40)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${RFValue(5)}px;
  background-color: ${theme.colors.card_color};
`;

export const Profile = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-left: ${RFValue(5)}px;
`;

export const ContentFilter = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: ${RFValue(15)}px;
`;

export const TextFilter = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(16)}px;
  font-family: MavenPro_400Regular;
`;
