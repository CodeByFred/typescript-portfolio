import { createContext, useContext } from "react";
import type { Tool } from "../types/types";

export const ToolsContext = createContext<Map<string, Tool> | null>(null);

export const useTools = () => {
  const context = useContext(ToolsContext);
  if (!context) {
    throw new Error("useTools must be used within a ToolsProvider");
  }
  return context;
};
