import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

interface ButtonProps {
  changePadding?: boolean;
  liked?: boolean;
}

interface TextButtonProps {
  liked?: boolean;
}

export const Content = styled.View`
  padding: ${RFValue(15)}px;
  background-color: ${theme.colors.card_color};
  margin-bottom: ${RFValue(5)}px;
  padding: ${RFValue(10)}px ${RFValue(15)}px;
`;

export const Title = styled.Text`
  font-family: MavenPro_500Medium;
  font-size: ${RFValue(19)}px;
  color: ${theme.colors.secondary};
`;

export const Subtitle = styled.Text`
  font-family: MavenPro_400Regular;
  font-size: ${theme.fontSizes.medium}px;
  color: ${theme.colors.secondary};
  align-self: flex-end;
`;

export const Info = styled.Text`
  font-family: MavenPro_400Regular;
  font-size: ${theme.fontSizes.medium}px;
  color: ${theme.colors.secondary};
  text-align: justify;
  margin-top: ${RFValue(10)}px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  display: ${({ liked }) => (liked ? "none" : "flex")};
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSizes.small}px;
  font-family: MavenPro_400Regular;
`;

export const ImagePost = styled.ImageBackground`
  width: 100%;
  height: ${RFValue(150)}px;
  background-size: contain;
  margin-top: ${RFValue(10)}px;
`;

export const ButtonReact = styled.TouchableOpacity<ButtonProps>`
  padding-right: ${({ changePadding }) => (changePadding ? "2px" : "10px")};
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  color: ${({ liked }) => (liked ? "pink" : "blue")};
  transition: 1s scale;
`;

export const Section = styled.View`
  flex-direction: row;
`;

export const ContentIteraction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${RFValue(10)}px;
`;

export const ButtonIteracion = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${RFValue(5)}px;
  width: 30%;
  justify-content: space-between;
`;

export const ContentReactions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentTitle = styled.View`
  width: 100%;
`;

export const TextIteraction = styled.Text`
  margin-left: ${RFValue(5)}px;
  font-family: MavenPro_500Medium;
  font-size: ${theme.fontSizes.large}px;
  color: ${theme.colors.secondary};
`;
