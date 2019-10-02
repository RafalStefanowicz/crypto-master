import React, { useState } from "react";

import { ChangePasswordForm } from "../../Form/ChangePasswordForm.tsx/ChangePasswordForm";
import { Loader } from "../../Loader/Loader";
import { LogOutBtn } from "../../LogOutBtn/LogOutBtn";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase } from "../../../firebase/Firebase";
import { usePersonalDb } from "../../../customHooks/usePersonalDb";

interface AccountLogicProps {
  firebase: Firebase;
}

const _AccountLogic = ({ firebase }: AccountLogicProps) => {
  const personalDb = usePersonalDb(firebase);
  const [isFormShown, setIsFormShown] = useState(false);

  if (!("userName" in personalDb)) return <Loader />;

  const { userName, email, createdBy } = personalDb;

  const renderChangePasswordForm = (): JSX.Element | null => {
    if (createdBy !== "firebase.com") {
      return (
        <span>
          logged by <span>{createdBy}</span>
        </span>
      );
    } else if (isFormShown) {
      return <ChangePasswordForm />;
    } else {
      return (
        <button
          onClick={() => {
            setIsFormShown(true);
          }}
        >
          Change password
        </button>
      );
    }
  };

  return (
    <div>
      <h1>{userName}</h1>
      <h1>{email}</h1>
      {renderChangePasswordForm()}
      <LogOutBtn />
    </div>
  );
};

export const AccountLogic = withFirebase(_AccountLogic);
