import React from "react";

import { Firebase } from "./Firebase";

export const FirebaseContext = React.createContext<null | Firebase>(null);
