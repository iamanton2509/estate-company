import {configureStore} from '@reduxjs/toolkit';
import {projectApi} from './projectsApi';
import {wishlistApi} from './wishlistApi';
import {newsApi} from './newsApi';
import {servicesApi} from './servicesApi';

export const store = configureStore({
    reducer: {
        [projectApi.reducerPath]: projectApi.reducer,
        [wishlistApi.reducerPath]: wishlistApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [servicesApi.reducerPath]: servicesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectApi.middleware).concat(wishlistApi.middleware).concat(newsApi.middleware).concat(servicesApi.middleware)
});