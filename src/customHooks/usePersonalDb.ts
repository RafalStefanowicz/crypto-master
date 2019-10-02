import { useEffect, useState } from "react";

import { Firebase } from "../firebase/Firebase";
import { PersonalI } from "../types/PersonalI";

export const usePersonalDb = (firebase: Firebase) => {
  const [personalDb, setPersonalDb] = useState<PersonalI | {}>({});

  const userId = firebase.getUserId();
  useEffect(() => {
    if (userId) {
      firebase.personalDb(userId).once("value", snapShot => {
        setPersonalDb(snapShot.val());
      });
    }
    return () => {};
  }, [firebase, userId]);

  return personalDb;
};
