import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import type { Tool } from "../types/types";

export const getAllTools = async (): Promise<Map<string, Tool>> => {
  const snapshot = await getDocs(collection(db, "tools"));
  const map = new Map<string, Tool>();

  snapshot.forEach((doc) => {
    const tool = doc.data() as Tool;
    map.set(tool.title, {
      ...tool,
      id: doc.id,
    });
  });

  return map;
};
