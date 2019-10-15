export const getLocaleDate = (date: number | string) =>
  new Date(Number(date)).toLocaleDateString();
