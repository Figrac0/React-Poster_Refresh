import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Posts, { loader as postsLoader } from "./routes/Posts";
import NewPost, { action as newPostAction } from "./routes/NewPost/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, {
    loader as PostDetailsLoader,
} from "./routes/PostDetails/PostDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost />,
                        action: newPostAction,
                    },
                    {
                        path: "/:id",
                        element: <PostDetails />,
                        loader: PostDetailsLoader,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
