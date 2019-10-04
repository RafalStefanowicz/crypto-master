import { getUsersAssetDetails } from "./getUsersAssetDetails";

export const filterUsersAsset = (
  usersAssetDetails: ReturnType<typeof getUsersAssetDetails>,
  filterValue: string
): ReturnType<typeof getUsersAssetDetails> =>
  usersAssetDetails.filter(userAsset => {
    const userName = userAsset.userName.toLowerCase();
    const filter = filterValue.toLowerCase();

    return userName.includes(filter);
  });
