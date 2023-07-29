import { useState } from "react";
import { removeNonLettersHyphensUnderscores, toCamelCase } from "../utils";

export const TextInput = ({
  title = ["Nombre del hechizo (sin espacios)", "Spell Name (no spaces)"],
  placeholder = ["Ingresa un nombre", "Enter your spell name"],
  chosenLang = 0,
  initialValue = "",
  disabled = false,
  value = "",
}) => {
  const [internValue, setValue] = useState<string>(initialValue);
  const id = toCamelCase(title[chosenLang]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(removeNonLettersHyphensUnderscores(e.target.value || ""));
  };

  return (
    <>
      <label htmlFor={id} className="text-sm">
        <span className="block text-center">{title[chosenLang]}</span>
      </label>
      <input
        id={id}
        type="text"
        className="block w-full mt-1 text-center"
        placeholder={placeholder[chosenLang]}
        onChange={(e) => onChange(e)}
        value={internValue || value}
        disabled={disabled}
      />
    </>
  );
};
