import {createContext} from 'react';


export type AppContextInterface = {
  authenticated: boolean,
}

export const {Provider, Consumer} = createContext<AppContextInterface | null>(null);


