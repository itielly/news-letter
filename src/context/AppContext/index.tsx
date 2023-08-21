import { createContext, useContext, useMemo, useState } from "react";
import { Alert } from "react-native";
import { CommentsType, NoticeType } from "../../pages/Home/types";
import { AppService } from "./service";

interface iAppContext {
  news: (type?: string) => Promise<boolean | undefined>;
  comments: (id: number) => Promise<boolean | undefined>;
  doComment: (comment: string, id: number) => Promise<boolean>;
  likes: number[];
  commentsList: CommentsType[];
  newsList: NoticeType[];
  doLike: (
    id: number,
    numberLikes: number,
    index: number
  ) => Promise<false | undefined>;
}

const AppContext = createContext<iAppContext>({} as iAppContext);

export const AppProvider = ({ children }: any) => {
  const [likes, setLikes] = useState<Array<number>>([]);
  const [newsList, setNewsList] = useState<NoticeType[]>([]);
  const [commentsList, setCommentsList] = useState<CommentsType[]>([]);

  const service = AppService();

  const news = async (type?: string) => {
    try {
      let result;
      if (!type) {
        result = await service.getNews();
      } else {
        result = await service.getNewsFiltered(type);
      }

      if (result.status !== 200) {
        Alert.alert(
          "Opss.. não foi possível carregar as informações",
          "Deseja tentar novamente? Caso esse alerta persista, verifique sua conexão de internet",
          [
            {
              text: "Cancelar",
            },
            { text: "OK", onPress: () => news() },
          ]
        );
        return false;
      }

      setNewsList(result.data);
      return true;
    } catch (e) {
      Alert.alert(
        "Opss.. não foi possível carregar as informações",
        "Deseja tentar novamente? Caso esse alerta persista, verifique sua conexão de internet",
        [
          {
            text: "Cancelar",
          },
          { text: "OK", onPress: () => news() },
        ]
      );
    }
  };

  const comments = async (id: number) => {
    try {
      const result = await service.getComment(id);

      if (result.status !== 200) {
        Alert.alert(
          "Opss.. não foi possível carregar as informações",
          "Deseja tentar novamente? Caso esse alerta persista, verifique sua conexão de internet",
          [
            {
              text: "Cancelar",
            },
            { text: "OK", onPress: () => comments(id) },
          ]
        );
        return false;
      }

      setCommentsList(result.data);
      return true;
    } catch (e) {
      Alert.alert(
        "Opss.. não foi possível carregar as informações",
        "Deseja tentar novamente? Caso esse alerta persista, verifique sua conexão de internet",
        [
          {
            text: "Cancelar",
          },
          { text: "OK", onPress: () => comments(id) },
        ]
      );
      return false;
    }
  };

  const doComment = async (comment: string, id: number) => {
    try {
      const result = await service.postComment(comment, id);
      if (result.status !== 201) {
        Alert.alert(
          "Opss.. não foi possível salvar seu comentário",
          "Deseja tentar novamente? Caso esse alerta persista, verifique sua conexão de internet",
          [
            {
              text: "Cancelar",
            },
            { text: "OK", onPress: () => doComment(comment, id) },
          ]
        );
        return false;
      }

      setCommentsList([...commentsList, result.data]);
      return true;
    } catch (e) {
      Alert.alert(
        "Opss.. não foi possível salvar seu comentário",
        "Deseja tentar novamente? Caso esse alerta persista, verifique sua conexão de internet",
        [
          {
            text: "Cancelar",
          },
          { text: "OK", onPress: () => doComment(comment, id) },
        ]
      );
      return false;
    }
  };

  const doLike = async (id: number, numberLikes: number, index: number) => {
    try {
      let idExists = likes.some((el) => el === id);

      if (idExists) {
        numberLikes -= 1;
      } else {
        numberLikes += 1;
      }

      const result = await service.patchLike(id, numberLikes);

      if (result.status !== 200) {
        return;
      }

      let aux = [...newsList];
      aux[index].likes = result.data.likes;
      setNewsList(aux);

      if (likes.length === 0) {
        setLikes([id]);
        return;
      }

      if (!idExists) {
        setLikes([...likes, id]);
        return;
      }

      setLikes((current) => current.filter((item) => item !== id));
    } catch (e) {
      return false;
    }
  };

  const value = useMemo(
    () => ({
      news,
      comments,
      doLike,
      likes,
      doComment,
      commentsList,
      newsList,
    }),
    [news, comments, doLike, likes, doComment, commentsList, newsList]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
