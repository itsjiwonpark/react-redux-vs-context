import { createContext } from "react";

const defaultState = {
  user: ""
};

const EntryContext = createContext(defaultState);

export default EntryContext;
