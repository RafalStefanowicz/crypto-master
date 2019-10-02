export interface InvestmentsI {
  now: {
    [crypto: string]: {
      [time: number]: NowI;
    };
  };
  past: {
    [crypto: string]: {
      [time: number]: PastI;
    };
  };
}

export interface NowI {
  buyPrice: number;
  cryptoAmount: number;
}

export interface PastI {
  buyPrice: number;
  buyTime: number;
  roi: number;
  sellCryptoAmount: number;
  sellPrice: number;
  sellTime: number;
}
