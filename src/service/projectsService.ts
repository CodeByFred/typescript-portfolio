import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import type { Project } from "../types/types";

export const getAllProjects = async (): Promise<Project[]> => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];
};
