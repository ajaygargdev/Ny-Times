import axiosClient from "../config/Axios.config";
import { ARTICALS_URL } from "../Constents/NyConstents";

export const getArticles = async (page = 1) => {
  try {
    const res = await axiosClient.get(`${ARTICALS_URL}/${page}.json`);
    console.log(res);
    if (res?.status && res?.status === 200 && res.data) {
      return {
        success: true,
        data: res.data,
      };
    }
    return { success: false };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};
