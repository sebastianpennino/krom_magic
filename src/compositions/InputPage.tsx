import { Dropdown } from "../components/Dropdown";
import { TextInput } from "../components/TextInput";
import { SpellAction } from "../reducers/spellReducer";
import { domainList } from "../app-types/Domains";
import { AppState } from "../App";
import { FakeNumericInput } from "../components/FakeNumericInput";
import { useEffect } from "react";
import { calculatePower } from "../utils/calculatePower";
import { CheckBox } from "../components/CheckBox";

type Props = {
  state: AppState;
  chosenLang: number;
  spellName?: string;
  dispatch: any;
};

// The input page lets you make choices to create the spell
export const InputPage = ({ state, chosenLang, dispatch }: Props) => {
  // Word Domain
  const changeDomain = (newValue: any, position: number) => {
    dispatch({
      type: SpellAction.CHANGE_DOMAIN,
      payload: { val: newValue, pos: position },
    });
  };
  // Word
  const changeWord = (newValue: any, position: number) => {
    dispatch({
      type: SpellAction.CHANGE_WORD,
      payload: { val: newValue, pos: position },
    });
  };

  const changeInverted = (newValue: any, position: number) => {
    dispatch({
      type: SpellAction.SWITCH_POLARITY,
      payload: { val: newValue, pos: position },
    });
  };

  const changeSpellName = (newValue: any) => {
    dispatch({
      type: SpellAction.CHANGE_NAME,
      payload: newValue,
    });
  };

  const changeSpellLength = (newValue: number) => {
    dispatch({
      type: SpellAction.CHANGE_LENGTH,
      payload: newValue,
    });
  };

  const spellLengthArray = Array.from({ length: state.spellLength });

  const calculateColSpan = (i: number, len: number) => {
    const totalColumns = 12;
    const mod = [len % 4, len % 3, len % 2]; // 0-3, 0-2, 0-1
    const isLastRow = [len - i <= mod[0], len - i <= mod[1], len - i <= mod[2]];
    const lgCols = isLastRow[0] ? totalColumns / mod[0] : 3; // default: 4 columns
    const mdCols = isLastRow[1] ? totalColumns / mod[1] : 4; // default: 3 columns
    const smCols = isLastRow[2] ? totalColumns / mod[2] : 6; // default: 2 columns

    return `col-span-${smCols} md:col-span-${mdCols} lg:col-span-${lgCols}`;
  };

  const wordOrderList = [
    ["Primera", "First"],
    ["Segunda", "Second"],
    ["Tercera", "Third"],
    ["Cuarta", "Fourth"],
    ["Quinta", "Fifth"],
    ["Sexta", "Sixth"],
    ["Séptima", "Seventh"],
    ["Octava", "Eighth"],
    ["Novena", "Ninth"],
    ["Décima", "Tenth"],
    ["Undécima", "Eleventh"],
    ["Duodécima", "Twelfth"],
  ];

  return (
    <>
      <div>
        <TextInput
          title={[
            "Nombre del hechizo (sin espacios)",
            "Spell Name (no spaces)",
          ]}
          placeholder={["Ingresa un nombre", "Enter your spell name"]}
          chosenLang={chosenLang}
          value={state.spellName}
          changeFn={(w: any) => changeSpellName(w)}
          centered
        />
      </div>
      <div className="flex space-x-4">
        <FakeNumericInput
          title={["Palabras:", "Words:"][chosenLang]}
          changeFn={changeSpellLength}
          value={state.spellLength}
          min={1}
          max={12}
        />
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        {spellLengthArray.map((_el, i) => (
          <div key={i} className={calculateColSpan(i, spellLengthArray.length)}>
            <Dropdown
              key={i + 1}
              title={wordOrderList[i]}
              options={domainList}
              chosenLang={chosenLang}
              changeFn={(newValue: any) => changeDomain(newValue, i)}
              selection={state.domainWords[i]}
              disabled={state.showResults}
            />
            <TextInput
              chosenLang={chosenLang}
              value={state.detailedWords[i]}
              changeFn={(newValue: any) => changeWord(newValue, i)}
            />
            <label className="flex mt-1">
              <input type="checkbox" name="assonance" value="assonance" />{" "}
              <span className="text-sm">
                &nbsp;{["Asonante", "Assonant"][chosenLang]}
              </span>
            </label>
            <label className="flex mt-1">
              <input type="checkbox" name="rythm" value="rythm" />
              <span className="text-sm">
                &nbsp;{["Rima", "Rythm"][chosenLang]}
              </span>
            </label>
            <label className="flex mt-1">
              <input
                type="checkbox"
                name="inverted"
                defaultChecked={state.invertedWords[i]}
              />
              <span className="text-sm">
                &nbsp;{["Invertida", "Inverted"][chosenLang]}
              </span>
            </label>
            <CheckBox 
              chosenLang={chosenLang}
              uniqueId={`inverted-${i}`}
              defaultChecked={state.invertedWords[i]}
              changeFn={(newValue: any) => changeInverted(newValue, i)}
              title={["Invertida", "Inverted"]}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full">
          <small style={{ fontSize: "10px" }}>
            <pre>{JSON.stringify({ ...state.results }, null, 2)}</pre>
          </small>
        </div>
      </div>
    </>
  );
};
