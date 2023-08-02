import { useEffect, useState } from "react";
import { removeNonLettersHyphensUnderscores, toCamelCase } from "../utils";
import { SuggestionList } from "./SuggestionList";

type Props = {
  title?: [string, string];
  placeholder?: [string, string];
  chosenLang: number;
  initialValue?: string;
  disabled?: boolean;
  centered?: boolean;
  value: string;
  changeFn?: any;
  initialSuggestions: string[];
};

export const TextInputWithAutocomplete = ({
  title,
  placeholder,
  chosenLang = 0,
  initialValue = "",
  disabled = false,
  value = "",
  centered = false,
  changeFn,
  initialSuggestions,
}: Props) => {
  const randomString = (Math.random() + 1).toString(36).substring(7);
  const [internValue, setValue] = useState<string>(initialValue);
  const id = toCamelCase((title && title[chosenLang]) || randomString);

  const [suggestions, setSuggestions] = useState<string[]>(initialSuggestions);

  const filteredSuggestions = suggestions
    .filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(internValue.toLowerCase()) > -1
    )
    .slice(0, 10);
    
  /* this is a mess, but will clean up later */
  useEffect(() => {
    setSuggestions(initialSuggestions);
  }, [initialSuggestions]);

  /* this is a mess, but will clean up later */
  const saveSyncChanges = (val: any) => {
    setValue(val);
  };

  /* this is a mess, but will clean up later */
  useEffect(() => {
    changeFn(internValue);
  }, [internValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveSyncChanges(e.target.value || "");
    setShowSuggestions(true);
  };

  const [showSuggestions, setShowSuggestions] = useState<Boolean>(false);
  const hideSuggestion = () => {
    setShowSuggestions(false);
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
      {/* FOR DEBUG:
      <div className="bg-gray-900">
        {internValue}^{value}
      </div> 
      */}
      <input
        id={id}
        type="text"
        className={`pl-1 pr-1 w-full mt-1 ${centered ? "text-center" : ""}`}
        placeholder={(placeholder && placeholder[chosenLang]) || ""}
        onChange={(e) => onChange(e)}
        value={internValue || value}
        disabled={disabled}
        onBlurCapture={() => {
          setTimeout(() => {
            hideSuggestion();
          }, 600); // hackish but it works!
        }}
      />

      {internValue.length > 0 &&
        showSuggestions &&
        filteredSuggestions &&
        filteredSuggestions.length > 0 && (
          <SuggestionList
            suggestions={filteredSuggestions}
            clickFn={saveSyncChanges}
            clean={hideSuggestion}
          />
        )}
    </>
  );
};
