import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { NewPost } from "./NewPost";
import { Posts } from "./Posts";
import { ConfirmEmail } from "./ConfirmEmail";
import { ChangeEmail } from "./ChangeEmail";
import { ConfirmChangeEmail } from "./ConfirmChangeEmail";
import React from "react";
import { useAuthState } from "./hooks";

const Secure = (props) => {
    const authState = useAuthState();

    if (authState === "LOADING") {
        return null;
    }

    if (authState === "SIGNED_IN") {
        return props.children;
    }

    if (authState === "NOT_SIGNED_IN") {
        return <Navigate to={"/login"} />;
    }
};

const Open = (props) => {
    const authState = useAuthState();

    if (authState === "LOADING") {
        return null;
    }

    if (authState === "SIGNED_IN") {
        return <Navigate to={"/posts"} />;
    }

    if (authState === "NOT_SIGNED_IN") {
        return props.children;
    }
};

function App() {
    return (
        <div className={"h-full bg-white"}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={"signup"}
                        element={
                            <Open>
                                <Signup></Signup>
                            </Open>
                        }
                    />
                    <Route
                        path={"login"}
                        element={
                            <Open>
                                <Login></Login>
                            </Open>
                        }
                    />
                    <Route
                        path={"confirm-email"}
                        element={
                            <Open>
                                <ConfirmEmail></ConfirmEmail>
                            </Open>
                        }
                    />

                    <Route
                        path={"posts"}
                        element={
                            <Secure>
                                <Posts></Posts>
                            </Secure>
                        }
                    />
                    <Route
                        path={"change-email"}
                        element={
                            <Secure>
                                <ChangeEmail />
                            </Secure>
                        }
                    />
                    <Route
                        path={"verify-change-email"}
                        element={
                            <Secure>
                                <ConfirmChangeEmail />
                            </Secure>
                        }
                    />
                    <Route
                        path={"new-post"}
                        element={
                            <Secure>
                                <NewPost></NewPost>
                            </Secure>
                        }
                    />

                    <Route path={"*"} element={<Navigate to={"login"} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
