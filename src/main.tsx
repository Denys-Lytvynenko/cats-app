import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";

import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage />, children: [] },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
