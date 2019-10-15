export const getLocaleDate = (date: number) =>
  new Date(Number(date)).toLocaleDateString();
