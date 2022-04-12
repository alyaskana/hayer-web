import React, {
  useContext,
  createContext,
  FC,
  useState,
  useEffect,
} from "react";

import actionCableRails from "actioncable";

const actionCable: typeof actionCableRails =
  typeof window !== "undefined" ? require("actioncable") : null;

type ActionCableContext = {
  cable: actionCableRails.Cable | null;
};

const actionCableContext = createContext<ActionCableContext>(null!);

export const ActionCableProvider: FC = ({ children }) => {
  const state = useActionCableProvider();
  return (
    <actionCableContext.Provider value={state}>
      {children}
    </actionCableContext.Provider>
  );
};

export const useActionCable = () => {
  return useContext(actionCableContext);
};

const useActionCableProvider = () => {
  const [cable, setCable] = useState<actionCableRails.Cable | null>(null);

  useEffect(() => {
    if (actionCable) {
      setCable(actionCable.createConsumer(process.env.NEXT_PUBLIC_WS_HOST!));
    }
  }, []);

  return {
    cable,
  };
};

export default ActionCableProvider;
