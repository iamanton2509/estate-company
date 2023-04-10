import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
    reducerPath: 'Services',
    tagTypes: ['Services'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: build => ({
        getServices: build.query({
            query: () => 'services'
        }) 
    })
});

export const {useGetServicesQuery} = servicesApi;