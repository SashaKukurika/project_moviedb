import React, { createContext, useState, ReactNode } from "react";

type StateType = any;

const Context = createContext<[StateType, React.Dispatch<React.SetStateAction<StateType>>] | null>(null);

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
    const state = useState<StateType>(null); // Початковий стан тут

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};