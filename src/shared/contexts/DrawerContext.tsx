import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContext {
  isDrawerOpen: boolean;
  toogleDrawerOpen: () => void;
}

interface IAppDrawerProvider {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const AppDrawerProvider = ({ children }: IAppDrawerProvider) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
