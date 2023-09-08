import { ReactNode } from "react";
import { CommentsType, NoticeType } from "../../pages/Home/types";

export interface Children {
  children: ReactNode;
}

export interface iAppContext {
  news: (type?: string) => Promise<boolean | undefined>;
  comments: (id: number) => Promise<boolean | undefined>;
  doComment: (comment: string) => Promise<boolean>;
  likes: number[];
  commentsList: CommentsType[];
  newsList: NoticeType[];
  doLike: (
    id: number,
    numberLikes: number,
    index: number
  ) => Promise<false | undefined>;
  idNewSelected: number;
  setIdNewSelected: (idNewSelected: number) => void;
}
