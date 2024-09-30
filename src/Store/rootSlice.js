import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArticles } from "../Services";

export const fetchArticles = createAsyncThunk(
  "root/fetchArticles",
  async (page = 1) => {
    console.log("-----test----");
    const response = await getArticles(page);
    if (!response.success) {
      throw new Error("Network response was not ok");
    }
    return { ...response.data, page };
  },
);

const initialState = {
  articles: [],
  copyright: "",
  isLoading: false,
  error: null,
  currentPage: "1",
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    changePage: (state, payload) => {
      state.currentPage = payload + "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = {
          ...state.articles,
          [action.payload.page]: action.payload?.results || [],
        };
        state.copyright = action.payload.copyright;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { changePage } = rootSlice.actions;

export default rootSlice.reducer;
