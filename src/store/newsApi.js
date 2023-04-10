import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    tagTypes: ['News'],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: build => ({
        getNews: build.query({
            query: () => 'news'
        })
    })
});

export const {useGetNewsQuery} = newsApi;