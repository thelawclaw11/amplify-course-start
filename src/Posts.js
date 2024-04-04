import {  useState } from "react";
import { Link } from "react-router-dom";


const Post = ({ post, userId, handleDelete }) => {
    const [imageBlob, setImageBlob] = useState(null);

    return (
        <li key={post.id} className="py-4">
            <h4 className={"mb-4"}>
                {post.userEmail}
                <span className={"text-gray-500"}>
                    {" "}
                    - {new Date(post.createdAt).toLocaleString()}
                </span>
            </h4>
            <p className={"mb-2"}>{post.content}</p>
            {imageBlob ? (
                <img src={URL.createObjectURL(imageBlob)} className={"w-full"} alt={""} />
            ) : null}
            {userId === post.userId || true ? (
                <button onClick={() => handleDelete(post)} className={"text-red-500"}>
                    Delete
                </button>
            ) : null}
        </li>
    );
};

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [userId] = useState(null);

    const handleLogout = async () => {};

    const getPosts = async () => {};

    const handleDelete = async () => {};

    return (
        <div>
            <div className={"mt-4 flex flex-row justify-between mx-8"}>
                <Link to={"/change-email"}>
                    <button className={"text-indigo-600"}>Change Email</button>
                </Link>
                <button onClick={handleLogout} className={"text-indigo-600"}>
                    Logout
                </button>
            </div>
            <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div>
                        <div className="md:flex md:items-center md:justify-between mb-3">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    Posts
                                </h2>
                            </div>
                            <div className="mt-4 flex md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <Link to={"/new-post"}>New Post</Link>
                                </button>
                            </div>
                        </div>

                        <ul className="divide-y divide-gray-200">
                            {posts.map((post) => {
                                return (
                                    <Post
                                        key={post.id}
                                        handleDelete={handleDelete}
                                        post={post}
                                        userId={userId}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
