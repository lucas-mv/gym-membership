import React from "react";
import globalHook from 'use-global-hook';

export interface State {
    loading: boolean
}

export interface Actions {
    showLoading: (store: any, loading:boolean) => void
}

const initialState:State = {
    loading: false,
};
  
const actions:Actions = {
    showLoading: (store:any, loading: boolean) => {
        store.setState({ loading: loading });
    },
};

const useGlobal = globalHook<State, Actions>(React, initialState, actions);
export default useGlobal
