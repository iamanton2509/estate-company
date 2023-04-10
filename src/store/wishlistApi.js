import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const wishlistApi = createApi({
    reducerPath: 'wishlistApi',
    tagTypes: ['Projects'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: (build) => ({
        getWishlist: build.query({
            query: () => 'wishlist',
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Projects', id })),
                { type: 'Projects', id: 'LIST' },
              ]
            : [{ type: 'Projects', id: 'LIST' }],
        }),
        deleteFromWishlist: build.mutation({
            query: (id) => ({
                url: `wishlist/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'Projects', id: 'LIST'}]
        })
    })
});

export const {useGetWishlistQuery, useDeleteFromWishlistMutation} = wishlistApi;