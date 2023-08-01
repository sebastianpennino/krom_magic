import { useState } from "react";
import { removeNonLettersHyphensUnderscores, toCamelCase } from "../utils";

type Props = {
  title?: [string, string];
  placeholder?: [string, string];
  chosenLang: number;
  initialValue?: string;
  disabled?: boolean;
  centered?: boolean;
  value: string;
  changeFn?: any;
};

export const TextInput = ({
  title,
  placeholder,
  chosenLang = 0,
  initialValue = "",
  disabled = false,
  value = "",
  centered = false,
  changeFn,
}: Props) => {
  const randomString = (Math.random() + 1).toString(36).substring(7);
  const [internValue, setValue] = useState<string>(initialValue);
  const id = toCamelCase((title && title[chosenLang]) || randomString);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(removeNonLettersHyphensUnderscores(e.target.value || ""));
    if (changeFn && typeof changeFn === "function") {
      changeFn(e.target.value || "");
    }
  };

  return (
    <>
      {title && title[chosenLang] && (
        <label htmlFor={id} className="text-sm">
          <span className={`block ${centered ? "text-center" : ""}`}>
            {title[chosenLang]}
          </span>
        </label>
      )}
      <input
        id={id}
        type="text"
        className={`pl-1 pr-1 w-full mt-1 ${centered ? "text-center" : ""}`}
        placeholder={(placeholder && placeholder[chosenLang]) || ""}
        onChange={(e) => onChange(e)}
        value={internValue || value}
        disabled={disabled}
      />
    </>
  );
};
