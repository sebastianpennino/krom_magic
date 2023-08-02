import { Reducer, useReducer, useState } from "react";
import FlagButton from "./components/FlagButton";
import { ReactComponent as KromsysLogo } from "./assets/k-logo.svg";
import { ResultsPage } from "./compositions/ResultPage";
import { InputPage } from "./compositions/InputPage";
import { AppAction, SpellAction, spellReducer } from "./reducers/spellReducer";
import { PowerWordDomain } from "@apptypes/Domains";

const langs = {
  esp: 0,
  eng: 1,
};
const defaultLang = langs.esp;
const maxSpellLength = 12

export type AppState = {
  showResults: boolean;
  spellName: string;
  domainWords: string[];
  detailedWords: string[];
  spellLength: number;
  results: any;
  invertedWords: boolean[];
  assonanceWords: boolean[];
  rhymingWords: boolean[];
  isGracious: boolean;
};

export const initialState: AppState = {
  showResults: false,
  spellName: "",
  domainWords: Array.from({ length: maxSpellLength }, () => "_"), // note: _ is "Unknown"
  detailedWords: Array.from({ length: maxSpellLength }, () => ""),
  spellLength: 4,
  results: null,
  invertedWords: Array.from({ length: maxSpellLength }, () => false),
  assonanceWords: Array.from({ length: maxSpellLength }, () => false),
  rhymingWords: Array.from({ length: maxSpellLength }, () => false),
  isGracious: false,
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

  const [chosenLang, setLang] = useState<number>(defaultLang);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-stone-950 sticky top-0">
        <div className="text-white">
          <KromsysLogo />
        </div>
        <div>
          <h1 className="text-sm">Kromsys Spell Creator</h1>
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
            const oneIsEmpty = state.domainWords
              .slice(0, state.spellLength)
              .filter((w) => {
                return w !== "" && w !== PowerWordDomain.UNKNOWN;
              });
            if (oneIsEmpty.length !== state.spellLength) {
              return alert(
                [
                  "Error: falta elegir Palabras",
                  "Error: Some Words are not selected",
                ][chosenLang]
              );
            }
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
