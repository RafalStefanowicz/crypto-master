export const testPassword = (password: string) =>
  /[a-z]/i.test(password) && /[0-9]/.test(password) && password.length > 5;
