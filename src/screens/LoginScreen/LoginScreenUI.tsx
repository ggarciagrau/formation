import { FC, useContext } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { LoginScreenContext } from '../../contexts/LoginScreen/LoginScreenContext';

export const LoginScreenUI: FC = () => {
    const { state } = useContext(LoginScreenContext);

    return (
        <>
            {!state.isRegistering ? (
                <LoginForm />
            ) : (
                <RegisterForm />
            )}
        </>
    );
}