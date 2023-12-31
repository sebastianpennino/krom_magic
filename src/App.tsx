import { Reducer, useReducer, useState } from "react";
import FlagButton from "./components/FlagButton";
import { ReactComponent as KromsysLogo } from "./assets/k-logo.svg";
import { ResultsPage } from "./compositions/ResultPage";
import { InputPage } from "./compositions/InputPage";
import { AppAction, SpellAction, spellReducer } from "./reducers/spellReducer";
import { PowerWordDomain } from "@apptypes/Domains";
import { DetailMode, ValidDetailMode } from "@apptypes/Details";
import { recoverFromLocalStorage } from "./utils/recoverFromLocalStorage";

const langs = {
  esp: 0,
  eng: 1,
};
const maxSpellLength = 9;

export type AppState = {
  showResults: boolean;
  spellName: string;
  domainWords: string[];
  detailedWords: string[];
  spellLength: number;
  results: any;
  detailMode: ValidDetailMode;
  onlyMainDetails: boolean;
  onlyTacticalDetails: boolean;
  opt: any;
};

export const initialState: AppState = {
  showResults: false,
  spellName: "",
  domainWords: [
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
    PowerWordDomain.MAIN,
  ], // note: _ is "Unknown"
  detailedWords: Array.from({ length: maxSpellLength }, () => ""),
  spellLength: 2,
  results: null,
  detailMode: DetailMode.BOTH,
  onlyMainDetails: false,
  onlyTacticalDetails: false,
  opt: null,
};

function App() {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(
    spellReducer,
    initialState
  );

  const resetAllExceptWordCount = () => {
    dispatch({
      type: SpellAction.RESET_STATE,
      payload: initialState,
    });
  };

  const updateResults = () => {
    dispatch({
      type: SpellAction.UPDATE_RESULTS,
      payload: chosenLang,
    });
  };

  const [chosenLang, setLang] = recoverFromLocalStorage("lang", langs.eng);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-stone-950 sticky top-0">
        <div className="text-white">
          <KromsysLogo />
        </div>
        <div>
          <h1 className="text-sm">
            {
              [
                "Kromsys - Creador de hechizos",
                "Kromsys - Spell Creator",
              ][chosenLang]
            }
          </h1>
        </div>
        <div className="text-white">
          <FlagButton toggleFn={setLang} currentValue={chosenLang} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-4 overflow-y-auto mb-10">
        {!state.showResults ? (
          <InputPage
            state={state}
            chosenLang={chosenLang}
            dispatch={dispatch}
            maxSpellLength={maxSpellLength}
          />
        ) : (
          <ResultsPage state={state} chosenLang={chosenLang} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 py-4 px-4 flex justify-center sticky bottom-0">
        <button
          className="w-1/2 lg:w-1/3 px-4 py-2 text-white text-sm mr-4"
          onClick={() => {
            resetAllExceptWordCount();
          }}
        >
          {["Limpiar todo", "Reset"][chosenLang]}
        </button>
        <button
          className="w-1/2 lg:w-1/3 px-4 py-2 text-white text-sm"
          onClick={() => {
            updateResults();
          }}
        >
          {["Calcular", "Calculate"][chosenLang]}
        </button>
      </footer>
    </div>
  );
}

export default App;
