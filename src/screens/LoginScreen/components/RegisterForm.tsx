import { FC, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RegisterFormData } from '../typings';
import { LoginScreenContext } from '../../../contexts/LoginScreen/LoginScreenContext';
import { LoginScreenActions } from '../../../contexts/LoginScreen';

export const RegisterForm: FC = () => {
    const { dispatch } = useContext(LoginScreenContext);

    const { register, handleSubmit } = useForm<RegisterFormData>();

    const onSubmit: SubmitHandler<RegisterFormData> = (data: RegisterFormData) => console.log(data);

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true, maxLength: 255 })}
                />

                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true, maxLength: 255 })}
                />

                <input
                    type="text"
                    placeholder="Surname"
                    {...register("surname", { required: true, maxLength: 255 })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 255 })}
                />
            </form>

            <button onClick={() => dispatch(LoginScreenActions.LOAD_LOGIN_FORM)}>Iniciar sesión</button>
        </>
    );
}