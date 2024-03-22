import React from 'react';
import { useContext, useReducer } from 'react';

export type InitialState = {
  [key: string]: React.ReactNode;
} & {
  default?: React.ReactNode;
  active?: Record<string, boolean>;
};

const initialState: InitialState = {};
export const Context = React.createContext<InitialState>(initialState);

const reducer = (state: InitialState, action: InitialState) => {
  action.active = action.active ?? {};
  action.active = { ...state.active, ...action.active };
  return {
    ...state,
    ...action,
  };
};

export const useSwitchStore = () => {
  return useContext(Context);
};

export function useSwitch() {
  return useReducer(reducer, initialState);
}

type Dispatch = React.Dispatch<InitialState>;
export const DispatchSwitch = React.createContext<Dispatch>(() => {});
DispatchSwitch.displayName = 'OW.DispatchSwitch';

export function useSwitchDispatch() {
  return useContext(DispatchSwitch);
}
