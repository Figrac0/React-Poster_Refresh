import { useLoaderData } from "react-router-dom";

import Post from "../Post/Post";
import classes from "../PostList/PostList.module.css";

function PostList() {
    const posts = useLoaderData();
    // const [posts, setPosts] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     async function fetchPosts() {
    //         setIsFetching(true);
    //         setError(null);

    //         try {
    //             const response = await fetch("http://localhost:8080/posts");

    //             if (!response.ok) {
    //                 throw new Error(
    //                     "Something went wrong. Please try again later."
    //                 );
    //             }

    //             const resData = await response.json();
    //             setPosts(resData.posts);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setIsFetching(false);
    //         }
    //     }

    //     fetchPosts();
    // }, []);

    // async function addPostHandler(postData) {
    //     setError(null);

    //     try {
    //         const response = await fetch("http://localhost:8080/posts", {
    //             method: "POST",
    //             body: JSON.stringify(postData),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to create post. Please try again.");
    //         }

    //         setPosts((existingPosts) => [postData, ...existingPosts]);
    //     } catch (err) {
    //         setError(err.message);
    //     }
    // }

    return (
        <>
            {/* {error && (
                <div style={{ textAlign: "center", color: "red" }}>
                    <h2>{error}</h2>
                </div>
            )} */}

            {/* {isFetching && (
                <p style={{ textAlign: "center", color: "white" }}>
                    Loading posts...
                </p>
            )} */}

            {
                /* {!isFetching && !error && */ posts.length > 0 && (
                    <ul className={classes.posts}>
                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                id={post.id}
                                author={post.author}
                                body={post.body}
                            />
                        ))}
                    </ul>
                )
            }

            {
                /* {!isFetching && !error && */ posts.length === 0 && (
                    <div style={{ textAlign: "center", color: "white" }}>
                        <h2>There are no posts yet...</h2>
                        <p>Start adding some!</p>
                    </div>
                )
            }
        </>
    );
}

export default PostList;
