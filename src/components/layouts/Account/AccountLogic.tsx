import React, { useState } from "react";

import { ChangePasswordForm } from "../../Form/ChangePasswordForm.tsx/ChangePasswordForm";
import { Loader } from "../../Loader/Loader";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase } from "../../../firebase/Firebase";
import { usePersonalDb } from "../../../customHooks/usePersonalDb";
import { Account } from "./Account";
import { Provider } from "./Provider/Provider";
import { Button } from "../../Button/Button";
import { ButtonTypes } from "../../../styles/button";

interface AccountLogicProps {
  firebase: Firebase;
}

const _AccountLogic = ({ firebase }: AccountLogicProps) => {
  const personalDb = usePersonalDb(firebase);
  const [isFormShown, setIsFormShown] = useState(false);

  if (!("userName" in personalDb)) return <Loader />;

  const { userName, email, createdBy } = personalDb;

  const toggleIsFormShown = () => {
    setIsFormShown(!isFormShown);
  };

  const renderProviderOrChangePass = (): JSX.Element => {
    if (createdBy !== "firebase.com") {
      return <Provider provider={createdBy} />;
    } else if (isFormShown) {
      return <ChangePasswordForm toggleIsFormShown={toggleIsFormShown} />;
    } else {
      return (
        <Button
          handleClick={toggleIsFormShown}
          buttonType={ButtonTypes.rectangle}
        >
          Change Password
        </Button>
      );
    }
  };

  return (
    <>
      <Account
        userName={userName}
        email={email}
        renderProviderOrChangePass={renderProviderOrChangePass}
      />
    </>
  );
};

export default withFirebase(_AccountLogic);
