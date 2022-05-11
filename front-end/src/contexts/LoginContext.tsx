import { createContext } from 'react';

interface ILoginContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext({} as ILoginContext);
