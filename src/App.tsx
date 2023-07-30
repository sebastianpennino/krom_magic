import { Reducer, useReducer, useState } from "react";
import FlagButton from "./components/FlagButton";
import { ReactComponent as KromsysLogo } from "./assets/k-logo.svg";
import { ResultsPage } from "./compositions/ResultPage";
import { InputPage } from "./compositions/InputPage";
import { AppAction, spellReducer } from "./reducers/spellReducer";

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
};

export const initialState: AppState = {
  showResults: false,
  spellName: "",
  words: ["", "", "", "", "", "", "", "", ""],
  spellLength: 9,
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
            console.log("A");
          }}
        >
          {["Calcular", "Calculate"][choosenLang]}
        </button>
      </footer>
    </div>
  );
}

export default App;
