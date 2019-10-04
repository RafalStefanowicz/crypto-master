import _mapValues from "lodash/mapValues";
import { WalletsI } from "../customHooks/useWallets";
import { CryptosI } from "../redux/reducers/cryptos";
import { WalletI } from "../redux/reducers/wallet";
import { getCurrencyFormat } from "./numberFormats";

export const getUsersAssetDetails = (wallets: WalletsI, cryptos: CryptosI) => {
  if (cryptos === null) return [];

  // create an object of userNames keys with asset and userNames property
  const users = _mapValues(wallets, (wallet: WalletI, userName: string) => {
    let asset = 0;

    for (let prop in wallet) {
      if (prop === "USD") {
        asset = asset + wallet[prop];
      } else {
        asset += wallet[prop] * cryptos[prop].PRICE;
      }
    }

    asset = getCurrencyFormat(asset);
    return { asset, userName };
  });
  const userNames = Object.keys(users);

  // create sorted array by rank of users
  const usersAssetDetails = userNames
    .map(userName => {
      return { ...users[userName] };
    })
    .sort((a, b) => {
      return b.asset - a.asset;
    })
    .map((userName, index) => {
      return { ...userName, rank: index + 1 };
    });

  return usersAssetDetails;
};
