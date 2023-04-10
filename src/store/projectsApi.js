import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
    reducerPath: 'projectsApi',
    tagTypes: ['Projects'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (build) => ({
        getProjects: build.query({
            query: () => `projects`,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Projects', id })),
                { type: 'Projects', id: 'LIST' },
              ]
            : [{ type: 'Projects', id: 'LIST' }],
        }),
        addToWishlist: build.mutation({
            query: (body) => ({
                url: `wishlist`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Projects', id: 'LIST'}]
        })
    }),
});

export const {useGetProjectsQuery, useGetWishlistQuery, useAddToWishlistMutation} = projectApi;