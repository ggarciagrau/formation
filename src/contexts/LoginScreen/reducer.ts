import { State } from "./LoginScreenProvider";
import { ActionTypes } from "./actions";

export default (payload: State, action: ActionTypes): State => {

    switch (action) {
        case ActionTypes.LOAD_LOGIN_FORM:
            console.log('ADIOS')
            return { ...payload, isRegistering: false };
            break;
        case ActionTypes.LOAD_REGISTER_FORM:
            console.log('HOLA')
            return { ...payload, isRegistering: true };
            break;
    }
}