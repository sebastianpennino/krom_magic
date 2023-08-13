import { AppState } from "../App";
import { calculatePower } from "../utils/calculatePower";

export enum SpellAction {
  CHANGE_WORD = "CHANGE_WORD",
  CHANGE_DOMAIN = "CHANGE_DOMAIN",
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_LENGTH = "CHANGE_LENGTH",
  UPDATE_RESULTS = "UPDATE_RESULTS",
  RESET_STATE = "RESET_STATE",
  SWITCH_ONLY_MAIN_DETAILS_FILTER = "SWITCH_ONLY_MAIN_DETAILS_FILTER",
  SWITCH_ONLY_TACTICAL_DETAILS_FILTER = "SWITCH_ONLY_TACTICAL_DETAILS_FILTER",
  TEST = "TEST",
}

export type ValidSpellAction = (typeof SpellAction)[keyof typeof SpellAction];

export type AppAction = {
  type: ValidSpellAction;
  payload: any;
};

export function spellReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case SpellAction.RESET_STATE: {
      return {
        ...action.payload,
        detailedWords: Array.from({ length: state.spellLength }, () => ""),
        spellLength: state.spellLength,
      };
    }
    case SpellAction.CHANGE_WORD: {
      const position = parseInt(action.payload?.pos, 10);
      const value = action.payload?.val || "";

      const newDetailedWords = [...state.detailedWords];
      newDetailedWords[position] = value;

      return {
        ...state,
        detailedWords: newDetailedWords,
      };
    }
    case SpellAction.CHANGE_DOMAIN: {
      const position = parseInt(action.payload?.pos, 10);
      const value = action.payload?.val || "";

      const newDomainWords = [...state.domainWords];
      newDomainWords[position] = value;

      return {
        ...state,
        domainWords: newDomainWords,
      };
    }
    case SpellAction.SWITCH_ONLY_MAIN_DETAILS_FILTER: {
      return {
        ...state,
        onlyMainDetails: action.payload
      }
    }
    case SpellAction.SWITCH_ONLY_TACTICAL_DETAILS_FILTER: {
      return {
        ...state,
        onlyTacticalDetails: action.payload
      }
    }
    case SpellAction.CHANGE_NAME: {
      return {
        ...state,
        spellName: action.payload,
      };
    }
    case SpellAction.CHANGE_LENGTH: {
      return {
        ...state,
        spellLength: action.payload,
      };
    }
    case SpellAction.UPDATE_RESULTS: {
      return {
        ...state,
        results: calculatePower(
          action.payload,
          state.detailedWords.slice(0, state.spellLength),
          state.domainWords.slice(0, state.spellLength),
          state.spellLength,
        ),
      };
    }
    case SpellAction.TEST: {
      return {
        ...state,
        opt: action.payload
      }
    }
  }
  throw Error("Unknown action: " + action.type);
}
