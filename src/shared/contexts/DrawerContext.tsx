import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContext {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toogleDrawerOpen: () => void;
  setDrawerOptions: (options: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
  icon: string;
  path: string;
  label: string;
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
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toogleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
