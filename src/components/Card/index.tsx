import { FC } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  ButtonReact,
  ImagePost,
  Info,
  TextButton,
  Subtitle,
  Title,
  Content,
  ContentIteraction,
  Section,
  TextIteraction,
  ContentReactions,
  ButtonIteracion,
  ContentTitle,
} from "./styles";
import { useTheme } from "styled-components";
import { NoticeType } from "../../pages/Home/types";
import { useAppContext } from "../../context/AppContext";

interface CardProps {
  data: NoticeType;
  getComments: (id: number) => Promise<void>;
  index: number;
}

export const Card: FC<CardProps> = ({ data, getComments, index }) => {
  const { id, type, title, description, image, comments } = data;
  const { colors } = useTheme();
  const { doLike, likes } = useAppContext();
  const hasLiked = likes.some((el) => el === id);

  return (
    <Content>
      <Section>
        <ContentTitle>
          <Subtitle>{type}</Subtitle>
          <Title>{title}</Title>
        </ContentTitle>
      </Section>
      <Info>{description}</Info>
      <ImagePost
        resizeMode="cover"
        imageStyle={{ borderRadius: 5 }}
        source={{
          uri: image,
        }}
      />
      <ContentIteraction>
        <ButtonIteracion onPress={() => getComments(id)} activeOpacity={0.8}>
          <ContentReactions>
            <AntDesign name="like2" size={15} color={colors.like} />
            <TextIteraction>{data.likes}</TextIteraction>
          </ContentReactions>
          <ContentReactions>
            <MaterialCommunityIcons
              name="comment-text-outline"
              size={15}
              color={colors.comment}
            />
            <TextIteraction>{comments}</TextIteraction>
          </ContentReactions>
        </ButtonIteracion>
        <Section>
          <ButtonReact
            onPress={() => doLike(id, data.likes, index)}
            activeOpacity={0.8}
          >
            <AntDesign
              name="like2"
              size={hasLiked ? 24 : 16}
              color={hasLiked ? colors.like : colors.secondary}
            />
            <TextButton liked={hasLiked}>Gostei</TextButton>
          </ButtonReact>
          <ButtonReact
            changePadding
            activeOpacity={0.8}
            onPress={() => getComments(id)}
          >
            <MaterialCommunityIcons
              name="comment-text-outline"
              size={16}
              color={colors.secondary}
            />
            <TextButton>Comentar</TextButton>
          </ButtonReact>
        </Section>
      </ContentIteraction>
    </Content>
  );
};
