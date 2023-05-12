import { createContext, Dispatch } from "react";
import { State, initialState } from './LoginScreenProvider';
import { ActionTypes } from './actions';

type CountContextProps = {
    state: State;
    dispatch: Dispatch<ActionTypes>;
  }
  

export const LoginScreenContext = createContext<CountContextProps>({
    state: initialState,
    dispatch: () => {}
});