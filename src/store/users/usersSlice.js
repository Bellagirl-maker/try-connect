import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
  };

  export const fetchUsers = createAsyncThunk('user/getUsers', async () => {
    const result = await fetch('https://randomuser.me/api/?results=5');

    return await result.json();
  });


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
        state.users.push(payload);
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addUsers } = usersSlice.actions;
export default usersSlice;
