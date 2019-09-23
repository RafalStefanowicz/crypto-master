import { UserNamesI } from "../redux/reducers/userNames";

type GetUniqueUserName = (userName: string, userNames: UserNamesI) => string;

export const getUniqueUserName: GetUniqueUserName = (userName, userNames) => {
  if (!userNames[userName]) return userName;
  let uniqueUserName = "";
  do {
    const randomId = Math.floor(Math.random() * 1000);
    uniqueUserName = `${userName}_${randomId}`;
    console.log(typeof userNames[uniqueUserName]);
  } while (false);
  return uniqueUserName;
};
