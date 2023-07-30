import { AppState } from "../App";

export enum SpellAction {
  CHANGE_DOMAIN = "CHANGE_DOMAIN",
  CHANGE_LENGTH = "CHANGE_LENGTH",
}

export type ValidSpellAction = (typeof SpellAction)[keyof typeof SpellAction];

export type AppAction = {
  type: ValidSpellAction;
  payload: any;
};

export function spellReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case SpellAction.CHANGE_DOMAIN: {
      const position = parseInt(action.payload?.pos, 10);
      const value = action.payload?.val || "";

      const newWords = [...state.words];
      newWords[position] = value;

      return {
        ...state,
        words: newWords,
      };
    }
    case SpellAction.CHANGE_LENGTH: {
      return {
        ...state,
        spellLength: action.payload,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
