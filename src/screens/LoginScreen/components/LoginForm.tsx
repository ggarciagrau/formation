import { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormData } from "../typings";
import { LoginScreenContext } from "../../../contexts/LoginScreen/LoginScreenContext";
import { LoginScreenActions } from "../../../contexts/LoginScreen";

export const LoginForm: FC = () => {
    const { dispatch } = useContext(LoginScreenContext);

    const { register, handleSubmit } = useForm<LoginFormData>();

    const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true, maxLength: 255 })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 255 })}
                />
                <button type="submit">Submit</button>
            </form>

            <button onClick={() => dispatch(LoginScreenActions.LOAD_REGISTER_FORM)}>Registrarse</button>
        </>
    );
}