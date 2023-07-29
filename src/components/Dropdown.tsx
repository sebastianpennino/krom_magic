import { toCamelCase } from "../utils";

const defaultOptions = [
  {
    name: ["Test-1", "Test-1-eng"],
    formulaName: "TEST1",
  },
  {
    name: ["Test-2", "Test-2-eng"],
    formulaName: "TEST2",
  },
];

type opt = {
  name: string[];
  formulaName: any;
};

type Props = {
  options: Array<opt>;
  chosenLang: number;
  title: string[];
  filterFn?: (options: opt) => boolean;
  changeFn: any;
  selection: any;
  disabled: boolean;
};

export const Dropdown = ({
  options = defaultOptions,
  chosenLang = 0,
  title = ["Dropdown"],
  filterFn,
  changeFn,
  selection,
  disabled=false
}: Props) => {
  const cleanTitle = Array.isArray(title) ? title[chosenLang] : "Dropdown";
  const id = toCamelCase(cleanTitle);
  let cleanOpts = options;

  if (typeof filterFn === "function") {
    cleanOpts = options.filter(filterFn);
  }

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("onChange!", e.target.value);
    changeFn(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{cleanTitle}</label>
      <select
        id={id}
        className="block w-full mt-1"
        onChange={(e) => onChange(e)}
        value={selection}
        disabled={disabled}
      >
        {cleanOpts.map((opt) => {
          return (
            <option key={opt.formulaName} value={opt.formulaName}>
              {opt.name[chosenLang]}
            </option>
          );
        })}
      </select>
    </>
  );
};
