import React, {
  useContext,
  createContext,
  FC,
  useState,
  useEffect,
} from "react";

import { useAuth, useActionCable } from "hooks";

type NewResponsesContext = {
  hasNewResponses: boolean;
  cleanResponses: () => void;
};

const newResponsesContext = createContext<NewResponsesContext>(null!);

export const NewResponsesProvider: FC = ({ children }) => {
  const { user } = useAuth();
  const { cable } = useActionCable();
  const [hasNewResponses, setHasNewResponses] = useState(false);

  useEffect(() => {
    const handleReceivedMessage = () => {
      setHasNewResponses(true);
    };

    let newSubscription: any = null;

    if (user) {
      newSubscription = cable?.subscriptions.create(
        {
          channel: "UsersChannel",
          user: user.id,
        },
        {
          received: () => {
            handleReceivedMessage();
          },
        }
      );
    }

    return () => {
      newSubscription?.unsubscribe();
    };
  }, [cable, user?.id]);

  const cleanResponses = () => {
    setHasNewResponses(false);
  };

  return (
    <newResponsesContext.Provider value={{ hasNewResponses, cleanResponses }}>
      {children}
    </newResponsesContext.Provider>
  );
};

export const useNewResponses = () => {
  return useContext(newResponsesContext);
};

export default NewResponsesProvider;
