import { Reducer, useReducer, useState } from "react";
import FlagButton from "./components/FlagButton";
import { ReactComponent as KromsysLogo } from "./assets/k-logo.svg";
import { ResultsPage } from "./compositions/ResultPage";
import { InputPage } from "./compositions/InputPage";
import { AppAction, SpellAction, spellReducer } from "./reducers/spellReducer";
import { PowerWordDomain } from "./app-types/Domains";

const langs = {
  esp: 0,
  eng: 1,
};

const defaultLang = langs.esp;

export type AppState = {
  showResults: boolean;
  spellName: string;
  words: string[];
  spellLength: number;
  results: any;
};

export const initialState: AppState = {
  showResults: false,
  spellName: "",
  words: [
    PowerWordDomain.ILUSION ,
    PowerWordDomain.TRANSMUTATION,
    PowerWordDomain.NECROMANCY,
    PowerWordDomain.EVOCATION,
    "",
    "",
    "",
    "",
    "",
  ],
  spellLength: 4,
  results: null,
};

function App() {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(
    spellReducer,
    initialState
  );

  const [choosenLang, setLang] = useState<number>(defaultLang);

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
          <FlagButton toggleFn={setLang} currentValue={choosenLang} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-4 overflow-y-auto mb-10">
        {!state.showResults ? (
          <InputPage
            state={state}
            choosenLang={choosenLang}
            dispatch={dispatch}
          />
        ) : (
          <ResultsPage state={state} choosenLang={choosenLang} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 py-4 px-4 flex justify-center sticky bottom-0">
        <button
          className="w-1/2 lg:w-1/3 px-4 py-2 text-white text-sm mr-4"
          onClick={() => {
            console.log("A");
          }}
        >
          {["< Limpiar", "< Clean up"][choosenLang]}
        </button>
        <button
          className="w-1/2 lg:w-1/3 px-4 py-2 text-white text-sm"
          onClick={() => {
            const oneIsEmpty = state.words
              .slice(0, state.spellLength)
              .filter((w) => {
                return w !== "";
              });
            if (oneIsEmpty.length !== state.spellLength) {
              return alert(
                "Error: Can't process your request, some words are not selected. All must have a domain selected"
              );
            }
            dispatch({
              type: SpellAction.UPDATE_RESULTS,
              payload: choosenLang,
            });
          }}
        >
          {["Calcular", "Calculate"][choosenLang]}
        </button>
      </footer>
    </div>
  );
}

export default App;
