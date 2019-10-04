export interface InvestmentsI {
  current: InvestmentsCurrentI;
  completed: InvestmentsCompletedI;
}

export interface InvestmentsCurrentI {
  [crypto: string]: {
    [time: number]: CurrentI;
  };
}
export interface InvestmentsCompletedI {
  [crypto: string]: {
    [time: number]: CompletedI;
  };
}

export interface CurrentI {
  buyPrice: number;
  cryptoAmount: number;
}

export interface CompletedI {
  buyPrice: number;
  buyTime: number;
  roi: number;
  sellCryptoAmount: number;
  sellPrice: number;
  sellTime: number;
}
