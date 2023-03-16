import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "@routes/routes";

import Breeds from "@routes/breeds";
import Breed from "@routes/breeds/breed";
import Dislikes from "@routes/dislikes";
import Gallery from "@routes/gallery";
import Home from "@routes/home";
import Likes from "@routes/likes";
import Root from "@routes/root";
import Search from "@routes/search";
import Voting from "@routes/voting";
import ErrorPage from "./pages/ErrorPage";

import "./index.scss";

const rootElement = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: routes.home,
                element: <Home />,
            },
            {
                path: routes.breeds,
                element: <Breeds />,
            },
            {
                path: `${routes.breeds}/:breedId`,
                element: <Breed />,
            },
            {
                path: routes.gallery,
                element: <Gallery />,
            },
            {
                path: routes.voting,
                element: <Voting />,
            },
            {
                path: `${routes.search}/:searchId`,
                element: <Search />,
            },
            {
                path: routes.likes,
                element: <Likes />,
            },
            {
                path: routes.dislikes,
                element: <Dislikes />,
            },
        ],
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
