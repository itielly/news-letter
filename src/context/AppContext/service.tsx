import api from "../../service/api";

export const AppService = () => {
  const getNews = async () => {
    const result = await api.get(`notices`);

    return result;
  };

  const getNewsFiltered = async (type: string) => {
    const result = await api.get(`notices?type=${type}`);

    return result;
  };

  const getComment = async (id: number) => {
    const result = await api(`comments?post_origin_id=${id}`);

    return result;
  };

  const postComment = async (comment: string, id: number) => {
    const result = await api.post(`comments`, {
      post_origin_id: id,
      user_name: "Anônimo",
      comment,
      replies: [],
      likes_count: 0,
    });

    return result;
  };

  const patchLike = async (id: number, likes: number) => {
    const result = await api.patch(`notices/${id}`, {
      likes,
    });

    return result;
  };

  return { getNews, getNewsFiltered, getComment, postComment, patchLike };
};
