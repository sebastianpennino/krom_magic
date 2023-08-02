type Props = {
  suggestions: string[];
  clickFn: any;
  clean: any;
};

export function removeNonLettersHyphensUnderscores(text: string): string {
  return String(text).replace(/[^a-zA-Z-_]+/g, "");
}

export const SuggestionList = ({ suggestions, clickFn, clean }: Props) => {
  return (
    <div className="relative w-full">
      <div className="shadow-lg bg-gray-700 rounded-md absolute w-full">
        {suggestions.map((text, i) => {
          return (
            <span
              key={`${removeNonLettersHyphensUnderscores(text)}-${i}`}
              className="hover:bg-gray-900 flex no-underline cursor-pointer"
              onClick={() => {
                clickFn(text);
                clean()
              }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
