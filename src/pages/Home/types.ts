export interface NoticeType {
  id: number;
  idAuthor: number;
  type: string;
  title: string;
  description: string;
  createdAt: string;
  typeMachine: string;
  image: string;
  likes: number;
  comments: number;
}

export interface CommentsType {
  id: number;
  post_origin_id: number;
  user_name: string;
  content_id: number;
  comment: string;
  created: string;
  replies: RepliesType[];
  likes_count: number;
}

export interface RepliesType {
  id: number;
  user_origin_id: number;
  user_name: number;
  comment_id: number;
  comment: string;
  created: string;
  likes_count: number;
}
