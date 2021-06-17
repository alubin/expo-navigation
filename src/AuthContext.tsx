import {createContext, useContext} from "react";

type Context = {
    logIn: () => void;
    logOut: () => void;
};

export const AuthContext = createContext<Context>({
    logIn: () => console.warn('no auth provider'),
    logOut: () => console.warn('no auth provider'),
});

export const useAuth = () => useContext(AuthContext);
