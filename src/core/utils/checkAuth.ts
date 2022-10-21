import { TOKEN } from "./constants";

export const checkAuth = () => {
  console.log(!!localStorage.getItem(TOKEN));
  return !!localStorage.getItem(TOKEN);
};
