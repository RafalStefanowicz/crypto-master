import { useState, useEffect } from "react";
import { InvestmentsI } from "../types/InvestmentsInterfaces";
import { Firebase } from "../firebase/Firebase";

export const useInvestmentsDb = (
  userId: string | undefined,
  firebase: Firebase
): InvestmentsI | {} => {
  const [investments, setInvestments] = useState<InvestmentsI | {}>({});

  useEffect(() => {
    if (userId) {
      firebase.investmentsDb(userId).on("value", snapShot => {
        setInvestments(snapShot.val());
      });
      return () => {
        firebase.investmentsDb(userId).off();
      };
    }
  }, [userId]);

  return investments;
};
