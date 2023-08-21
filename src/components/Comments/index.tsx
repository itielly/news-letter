import { FC, useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Keyboard,
  ImageURISource,
  ImageSourcePropType,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  Background,
  ButtonSend,
  CloseButton,
  Comment,
  Content,
  ContentComment,
  ContentInput,
  ContentLikes,
  InputComment,
  Name,
  ProfileImage,
  Section,
  SubComment,
  TextButton,
  Title,
} from "./styles";
import { useTheme } from "styled-components";
import { useAppContext } from "../../context/AppContext";

interface CommentsProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const Comments: FC<CommentsProps> = ({ visible, setVisible }) => {
  const { colors } = useTheme();
  const { doComment, commentsList } = useAppContext();
  const data = commentsList;

  const [valueComment, setValueComment] = useState("");

  const loadAvatar: { [key: number]: ImageSourcePropType } = {
    0: require("../../assets/image/user-0.png"),
    1: require("../../assets/image/user-1.png"),
    2: require("../../assets/image/user-2.png"),
    3: require("../../assets/image/user-3.png"),
    4: require("../../assets/image/user-4.png"),
    5: require("../../assets/image/user-5.png"),
  };

  const registerComment = async () => {
    if (valueComment !== "") {
      let id = data.find((el) => el.post_origin_id)?.post_origin_id;

      if (id) {
        const result = await doComment(valueComment, id);

        if (result) {
          setValueComment("");
          Keyboard.dismiss();
        }
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}
    >
      <Background>
        <Content>
          <Title>Comentários</Title>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <>
                <ContentComment key={item.id}>
                  <ContentLikes>
                    <AntDesign
                      name="like2"
                      size={15}
                      color={colors.like}
                      style={{ marginRight: 5 }}
                    />
                    <Name>{item.likes_count}</Name>
                  </ContentLikes>
                  <ProfileImage source={loadAvatar[item.id]} />
                  <Section>
                    <Name>{item?.user_name}</Name>
                    <Comment>{item?.comment}</Comment>
                  </Section>
                </ContentComment>
                {item?.replies?.length !== 0 &&
                  item?.replies.map((reply, index) => (
                    <SubComment key={reply.id} removeBorder={index === 0}>
                      <ProfileImage subComment source={loadAvatar[reply.id]} />
                      <Section>
                        <Name>{reply?.user_name}</Name>
                        <Comment>{reply?.comment}</Comment>
                      </Section>
                    </SubComment>
                  ))}
              </>
            )}
            keyExtractor={(item) => String(item.id)}
          />
          <ContentInput>
            <InputComment
              placeholder="Deixe também seu comentário"
              placeholderTextColor={colors.secondary}
              value={valueComment}
              onChangeText={(value) => setValueComment(value)}
            />
            <ButtonSend onPress={registerComment}>
              <Feather name="send" size={20} color={colors.secondary} />
            </ButtonSend>
          </ContentInput>
          <CloseButton onPress={() => setVisible(false)}>
            <TextButton>Fechar</TextButton>
          </CloseButton>
        </Content>
      </Background>
    </Modal>
  );
};
