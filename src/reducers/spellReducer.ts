import { AppState } from "../App";

export enum SpellAction {
  SELECT_SPECIES = "SELECT_SPECIES",
}

export type ValidSpellAction =
  (typeof SpellAction)[keyof typeof SpellAction];

export type AppAction = {
  type: ValidSpellAction;
  payload: any;
};

export function spellReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case SpellAction.SELECT_SPECIES: {
      return {
        ...state,
        charSpecies: action.payload,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
