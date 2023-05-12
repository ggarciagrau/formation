import { FC } from "react";
import { LoginScreenUI } from "./LoginScreenUI";
import { LoginScreenProvider } from "../../contexts/LoginScreen";

export const LoginScreen: FC = () => {
    
    return (
        <LoginScreenProvider>
            <LoginScreenUI />
        </LoginScreenProvider>
    );
}