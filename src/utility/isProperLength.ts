const MAX_USER_NAME_LENGTH = 24;
const MAX_INDIVIDUAL_PART = 12;
export const isProperLength = (string: string) => {
  if (string.length > MAX_USER_NAME_LENGTH) return false;
  return !string.split(" ").find(part => part.length > MAX_INDIVIDUAL_PART);
};
