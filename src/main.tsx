import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes/routes";

import ErrorPage from "./pages/ErrorPage";
import Breeds from "./routes/breeds";
import Gallery from "./routes/gallery";
import Home from "./routes/home";
import Root from "./routes/root";
import Voting from "./routes/voting";

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
                path: routes.gallery,
                element: <Gallery />,
            },
            {
                path: routes.voting,
                element: <Voting />,
            },
        ],
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
