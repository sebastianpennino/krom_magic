import { AppState } from "../App";
import { CheckBox } from "../components/CheckBox";
import { ValidPowerWordDomain, domainList } from "../apptypes/Domains";
import { Dropdown } from "../components/Dropdown";
import { FakeNumericInput } from "../components/FakeNumericInput";
import { SpellAction } from "../reducers/spellReducer";
import { TextInput } from "../components/TextInput";
import { TextInputWithAutocomplete } from "../components/TextInputWithAutocomplete";
import { powerWordList } from "../apptypes/Words";
import { DetailMode, detailList } from "@apptypes/Details";
import { RadioOptions } from "../components/RadioOptions";

type Props = {
  state: AppState;
  chosenLang: number;
  spellName?: string;
  dispatch: any;
  maxSpellLength: number;
};

// The input page lets you make choices to create the spell
export const InputPage = ({
  state,
  chosenLang,
  maxSpellLength,
  dispatch,
}: Props) => {
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

  const changeMainDetails = (newValue: boolean) => {
    dispatch({
      type: SpellAction.SWITCH_ONLY_MAIN_DETAILS_FILTER,
      payload: newValue,
    });
  };

  const changeTacticalDetails = (newValue: boolean) => {
    dispatch({
      type: SpellAction.SWITCH_ONLY_TACTICAL_DETAILS_FILTER,
      payload: newValue,
    });
  };

  const changeOpt = (newValue: any, cat: string) => {
    dispatch({
      type: SpellAction.TEST,
      payload: { newValue, cat },
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
          title={["Concepto del hechizo", "Spell Concept"]}
          placeholder={["", ""]}
          chosenLang={chosenLang}
          value={state.spellName}
          changeFn={(w: any) => changeSpellName(w)}
          centered
        />
      </div>
      <div className="flex space-x-4">
        <FakeNumericInput
          min={1}
          max={maxSpellLength}
          title={["Palabras:", "Words:"][chosenLang]}
          changeFn={changeSpellLength}
          value={state.spellLength}
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
            <TextInputWithAutocomplete
              chosenLang={chosenLang}
              value={state.detailedWords[i]}
              changeFn={(newValue: any) => changeWord(newValue, i)}
              initialSuggestions={
                powerWordList[
                  state.domainWords[i] as unknown as ValidPowerWordDomain
                ][chosenLang]
              }
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 flex-col">
        <CheckBox
          chosenLang={chosenLang}
          uniqueId="onlyMainDetailFilter"
          defaultChecked={state.onlyMainDetails}
          changeFn={(newValue: any) => changeMainDetails(newValue)}
          title={["Solo detalles principales", "Only main details"]}
        />
        <CheckBox
          chosenLang={chosenLang}
          uniqueId="onlyTacticalDetailFilter"
          defaultChecked={state.onlyTacticalDetails}
          changeFn={(newValue: any) => changeTacticalDetails(newValue)}
          title={["Solo tacticos", "Only tactical"]}
        />
        <pre>{JSON.stringify({ opt: state.opt }, null, 2)}</pre>
      </div>
      <div className="flex justify-center mt-4 flex-col">
        {detailList
          .filter((d) => {
            if (state.onlyMainDetails) {
              return d.isMain;
            } else {
              return true;
            }
          })
          .filter((d) => {
            if (state.onlyTacticalDetails) {
              return (
                d.mode === DetailMode.TACTICAL || d.mode === DetailMode.BOTH
              );
            } else {
              return (
                d.mode === DetailMode.NARRATIVE || d.mode === DetailMode.BOTH
              );
            }
          })
          // .filter((d) => {
          //   if (state.detailMode !== DetailMode.BOTH) {
          //     return d.mode === state.detailMode;
          //   } else {
          //     return true;
          //   }
          // })
          .map((d) => {
            return (
              <RadioOptions
                legend={d.name[chosenLang]}
                steps={d.steps[chosenLang]}
                cat={d.formulaName}
                changeFn={(e: any, i: any) => {
                  changeOpt(e, i);
                }}
              />
              // <div style={{ border: "1px solid red" }} key={d.formulaName}>
              //   <pre>
              //     {JSON.stringify(
              //       {
              //         name: d.name[chosenLang],
              //         mode: d.mode,
              //         steps: d.steps[chosenLang],
              //         progression: d.progression,
              //       },
              //       null,
              //       2
              //     )}
              //   </pre>
              // </div>
            );
          })}
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
