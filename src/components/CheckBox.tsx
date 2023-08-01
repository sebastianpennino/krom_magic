import { useState } from "react";

type Props = {
  changeFn?: any;
  chosenLang: number;
  defaultChecked: boolean;
  disabled?: boolean;
  title: string[];
  uniqueId: string;
};

export const CheckBox = ({
  uniqueId,
  chosenLang = 0,
  title = ["titulo", "title"],
  disabled = false,
  defaultChecked = false,
  changeFn,
}: Props) => {
  const randomString = (Math.random() + 1).toString(36).substring(7);
  const name = uniqueId ? uniqueId : randomString;

  const [internValue, setValue] = useState<boolean>(defaultChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const boolVal = e.target.checked;
    setValue(boolVal);
    if (changeFn && typeof changeFn === "function") {
      changeFn(boolVal);
    }
  };

  return (
    <label className="flex mt-1">
      <input
        type="checkbox"
        name={name}
        defaultChecked={internValue}
        disabled={disabled}
        onChange={(e) => onChange(e)}
      />
      {title && <span className="text-sm">&nbsp;{title[chosenLang]}</span>}
    </label>
  );
};
