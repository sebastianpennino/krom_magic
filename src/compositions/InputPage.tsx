import { Dropdown } from "../components/Dropdown";
import { TextInput } from "../components/TextInput";
import { SpellAction } from "../reducers/spellReducer";
import { domainList } from "../app-types/Domains";
import { AppState } from "../App";
import { FakeNumericInput } from "../components/FakeNumericInput";
import { useEffect } from "react";
import { calculatePower } from "../utils/calculatePower";

type Props = {
  state: AppState;
  choosenLang: number;
  spellName?: string;
  dispatch: any;
};

// The input page lets you make choices to create the spell
export const InputPage = ({ state, choosenLang, dispatch }: Props) => {
  const changeDomain = (newValue: any, position: number) => {
    dispatch({
      type: SpellAction.CHANGE_DOMAIN,
      payload: { val: newValue, pos: position },
    });
  };

  const changeSpellLength = (newValue: number) => {
    dispatch({
      type: SpellAction.CHANGE_LENGTH,
      payload: newValue,
    });
  };

  const offSet = [0, 2, 4, 6, 8, 10];
  const spellLengthArray = Array.from({ length: state.spellLength });

  // Split the array into chunks of a specified size
  const chunkArray = (arr: any[], size: number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };
  const chunksOfTwo = chunkArray(spellLengthArray, 2);

  /*
  useEffect(() => {
    calculatePower(choosenLang, [], state.words, state.spellLength);
  }, [choosenLang, state.words, state.spellLength]);
  */

  return (
    <>
      <div>
        <TextInput chosenLang={choosenLang} value={state.spellName} />
      </div>
      <div className="flex space-x-4">
        <FakeNumericInput
          title={["Palabras:", "Words:"][choosenLang]}
          changeFn={changeSpellLength}
          value={state.spellLength}
          min={1}
          max={9}
        />
      </div>
      {chunksOfTwo.map((chunk, i) => (
        <div key={i} className="flex space-x-4">
          {chunk.map((_unused: any, innerIndex: number) => (
            <div
              key={innerIndex}
              className={chunk.length > 1 ? `w-1/${chunk.length}` : "w-full"}
            >
              <div>
                <Dropdown
                  key={innerIndex + offSet[i] + 1}
                  title={[
                    `#${innerIndex + offSet[i] + 1}`,
                    `#${innerIndex + offSet[i] + 1}`,
                  ]}
                  options={domainList}
                  chosenLang={choosenLang}
                  changeFn={(newValue: any) =>
                    changeDomain(newValue, innerIndex + offSet[i])
                  }
                  selection={state.words[innerIndex + offSet[i]]}
                  disabled={state.showResults}
                />
              </div>
              <label className="flex justify-between">
                <input type="checkbox" name="subscribe" value="assonance" />{" "}
                <span className="text-sm">Assonance</span>
              </label>
              <label className="flex justify-between">
                <input type="checkbox" name="subscribe" value="rythm" />
                <span className="text-sm">Rythm</span>
              </label>
              <label className="flex justify-between">
                <input type="checkbox" name="subscribe" value="inverted" />
                <span className="text-sm">Inverted</span>
              </label>
            </div>
          ))}
        </div>
      ))}

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
