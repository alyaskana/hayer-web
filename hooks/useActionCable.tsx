import React, {
  useContext,
  createContext,
  FC,
  useState,
  useEffect,
} from "react";

import actionCableRails from "@rails/actioncable";

const actionCable: typeof actionCableRails =
  typeof window !== "undefined" ? require("@rails/actioncable") : null;

type ActionCableContext = {
  cable: actionCableRails.Cable | null;
};

const actionCableContext = createContext<ActionCableContext>(null!);

export const ActionCableProvider: FC = ({ children }) => {
  const [cable, setCable] = useState<actionCableRails.Cable | null>(null);

  useEffect(() => {
    if (actionCable && !cable) {
      setCable(actionCable.createConsumer(process.env.NEXT_PUBLIC_WS_HOST!));
    }

    return () => {
      cable && cable.disconnect();
    };
  }, []);

  return (
    <actionCableContext.Provider value={{ cable }}>
      {children}
    </actionCableContext.Provider>
  );
};

export const useActionCable = () => {
  return useContext(actionCableContext);
};

export default ActionCableProvider;
