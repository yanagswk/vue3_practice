import { AxiosPromise } from "axios";
import axios from "@/axios";

/**
 * todoリスト取得
 * @return
 */
export const getTodoList = () => {
  return axios.get("api/todo_list");
};

/**
 * ギャラリーリスト取得
 * @return
 */
export const getGalleryList = () => {
  return axios.get("api/gallery_list");
};
