import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextType {
  isOnline: boolean;
  setIsOnline: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextType | null>(null);