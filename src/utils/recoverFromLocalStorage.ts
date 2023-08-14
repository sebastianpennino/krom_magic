import { useLocalStorage } from "../hooks/useLocalStorage";
import { APP_KEY } from "../constants";

export const recoverFromLocalStorage = <T>(
  entry: string,
  initialValue: T,
  appKey: string = APP_KEY
) => {
  return useLocalStorage(`${entry}-${appKey}`, initialValue);
};
