import { CryptoIconI } from "../constants/cryptoIcons";

export const divideObjectValues = (object: any, pieces: number) => {
  const keys = Object.keys(object);
  const elementsInPiece = Math.floor(keys.length / pieces);
  const arrayOfPieces: CryptoIconI[][] = [];

  for (let i = 0; i < pieces; i++) {
    let piece: CryptoIconI[] = [];
    const pieceKeys = keys.splice(0, elementsInPiece);

    pieceKeys.forEach(key => {
      piece.push({ [key]: object[key] });
    });
    arrayOfPieces.push(piece);
  }
  return arrayOfPieces;
};
