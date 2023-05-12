import { useReducer, ReactNode } from "react";
import { LoginScreenContext } from "./LoginScreenContext";
import LoginScreenReducer from "./reducer";
import { initialState } from "./typings";

type Props = {
    children: ReactNode
}

export const LoginScreenProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(LoginScreenReducer, initialState);

    return (
        <LoginScreenContext.Provider value={{ state, dispatch }}>
            {children}
        </LoginScreenContext.Provider>
    );
}

