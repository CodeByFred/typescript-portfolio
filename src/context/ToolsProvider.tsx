import { useEffect, useState, type ReactNode } from "react";
import { getAllTools } from "../service/toolsService";
import type { Tool } from "../types/types";
import { ToolsContext } from "./ToolsContext";

export const ToolsProvider = ({ children }: { children: ReactNode }) => {
  const [toolsMap, setToolsMap] = useState<Map<string, Tool>>(new Map());

  useEffect(() => {
    const fetchTools = async () => {
      const tools = await getAllTools();
      setToolsMap(tools);
    };

    fetchTools();
  }, []);

  return <ToolsContext.Provider value={toolsMap}>{children}</ToolsContext.Provider>;
};
