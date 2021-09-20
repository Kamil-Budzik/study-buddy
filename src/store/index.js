import { v4 as uuid } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialNotesState = [
  {
    id: uuid(),
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet',
  },
];

const notesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => 'notes',
      providesTags: ['Notes'],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: '/notes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation } = notesApi;

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotesState,
  reducers: {
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { removeNote } = notesSlice.actions;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    notes: notesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware),
});
