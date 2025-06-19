import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getAllProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};
