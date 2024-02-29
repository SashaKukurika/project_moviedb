import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, SelectedGenresPage} from "./pages";
import {SearchMoviePage} from "./pages/SearchPages/SearchMoviePage";
import React from "react";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'movies/:id', element:<MovieInfoPage/>
            },
            {
                path:'genres', element:<GenresPage/>
            },
            {
                path:'genres/:id', element:<SelectedGenresPage/>
            },
            // {
            //     path:'genres/:id/:movieId', element:<SelectedGenresInfoPage/>
            // },
            {
                path:'search', element:<SearchMoviePage/>
            },
            {
                path:'search/:id', element:<MovieInfoPage/>
            }
        ]
    }
]);

export {
    router
}