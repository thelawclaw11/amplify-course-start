import { useState } from "react";

export const useAuthState = () => {
    const [authState, setAuthState] = useState("LOADING");

    return authState;
};
