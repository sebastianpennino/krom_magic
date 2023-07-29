import { Dropdown } from "../components/Dropdown";
import { TextInput } from "../components/TextInput";
import { SpellAction } from "../reducers/spellReducer";
import { species } from "../typings/Species";

type Props = {
  state: any;
  choosenLang: number;
  spellName?: string;
  dispatch: any;
};

// The input page lets you make choices to create the spell
export const InputPage = ({
  state,
  choosenLang,
  dispatch,
}: Props) => {

  const changeSpecies = (newValue: any) => {
    dispatch({
      type: SpellAction.SELECT_SPECIES,
      payload: newValue,
    });
  };

  return (
    <>
      <div>
        <TextInput
          chosenLang={choosenLang}
          value={state.spellName}
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <Dropdown
            title={["Especie", "Species"]}
            options={species}
            chosenLang={choosenLang}
            changeFn={changeSpecies}
            selection={state.charSpecies}
            disabled={state.showResults}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        x
      </div>
      <div className="flex justify-center mt-4">
        y
      </div>

    </>
  );
};
