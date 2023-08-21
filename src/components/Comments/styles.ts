import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

interface SubCommentProps {
  removeBorder?: boolean;
}

interface ProfileImageProps {
  subComment?: boolean;
}

export const Background = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${theme.colors.background_black_light};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 90%;
  align-self: center;
  padding: 15px;
  max-height: ${RFValue(650)}px;
`;

export const Title = styled.Text`
  font-family: MavenPro_500Medium;
  font-size: ${theme.fontSizes.xlarge}px;
  color: ${theme.colors.text};
  margin-left: 5px;
`;

export const ContentComment = styled.View`
  background-color: ${theme.colors.background_global};
  padding: ${RFValue(10)}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(5)}px;
  width: 100%;
  margin-top: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  font-family: MavenPro_500Medium;
  font-size: ${theme.fontSizes.medium}px;
  color: ${theme.colors.text};
`;

export const Comment = styled.Text`
  font-family: MavenPro_400Regular;
  font-size: ${theme.fontSizes.smalls}px;
  color: ${theme.colors.text};
  text-align: justify;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  color: ${theme.colors.text};
  padding: ${RFValue(10)}px;
`;

export const TextButton = styled.Text`
  font-family: MavenPro_400Regular;
  font-size: ${theme.fontSizes.smalls}px;
  color: ${theme.colors.text};
`;

export const InputComment = styled.TextInput`
  border: 1px solid ${theme.colors.text};
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  width: 98%;
  height: ${RFValue(40)}px;
  align-self: center;
  color: ${theme.colors.text};
`;

export const ButtonSend = styled.TouchableOpacity`
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  position: absolute;
  right: ${RFValue(3)}px;
  background-color: ${theme.colors.like};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
  height: ${RFValue(40)}px;
`;

export const SubComment = styled.View<SubCommentProps>`
  width: 94%;
  align-self: flex-end;
  padding: ${RFValue(8)}px;
  border-top-width: ${({ removeBorder }) => (removeBorder ? 0 : "1px")};
  border-top-color: ${theme.colors.background_global};
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image<ProfileImageProps>`
  width: ${({ subComment }) => (subComment ? RFValue(35) : RFValue(50))}px;
  height: ${({ subComment }) => (subComment ? RFValue(35) : RFValue(50))}px;
  border-radius: 100px;
  margin-right: ${RFValue(10)}px;
`;

export const ContentLikes = styled.View`
  position: absolute;
  right: ${RFValue(10)}px;
  top: ${RFValue(5)}px;
  flex-direction: row;
  align-items: center;
`;

export const ContentInput = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(12)}px;
  width: 100%;
  align-self: center;
  justify-content: center;
`;

export const Section = styled.View`
  width: 0;
  flex-grow: 1;
  flex: 1;
`;
