import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface PostState {
  posts: Array<any>;
  loading: 'reject' | 'pending' | 'fullfilled' | null;
  error: any;
}

const initialState: PostState = {
  posts: [],
  loading: null,
  error: null,
};

export const getPosts = createAsyncThunk('get/posts', async () => {
  const response = await axios.get(
    'https://telepatiaapi.onrender.com/api/posts/getAll',
  );
  return response.data.data;
});

export const likePost = createAsyncThunk('post/likes', async (payload:any,{rejectWithValue}) => {
try {
  console.log('payload',payload);
  
  const response = await axios.post(
    'https://telepatiaapi.onrender.com/api/posts/likePost',
    payload,
  );
  
  return response.data;
} catch (error:any) {
  return rejectWithValue(error.response.data);
}
});

const postSlice = createSlice({
  name: 'Posts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = 'pending';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        (state.loading = 'fullfilled'), (state.posts = action.payload);
      })
      .addCase(getPosts.rejected, state => {
        state.loading = 'reject';
      });
    builder
      .addCase(likePost.pending, state => {
        // state.loading = 'pending';
      })
      .addCase(likePost.fulfilled, (state, action) => {
        // state.loading = 'fullfilled';
        console.log(action.payload);
        
        const likedPosts = action.payload.data;
        const liked = state.posts.findIndex(
          post => post._id === likedPosts._id,
        );
        
        if (liked >= 0) {
          state.posts[liked].likes = likedPosts.likes;
        }
      }).addCase(likePost.rejected, (state,action) => {
        // state.loading = 'reject';
        console.log("red",action.payload);
        
      });
  },
});

export default postSlice.reducer;
