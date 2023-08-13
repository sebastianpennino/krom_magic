type Props = {
  legend: string;
  cat: string;
  steps: string[];
  changeFn: any;
};

function concatenateAndCamelCase(str1: string, str2: string) {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "");

  const combinedStr = cleanStr1 + "-" + cleanStr2;

  const words = combinedStr.split(" ");
  const camelCased = words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");
  return camelCased;
}

export const RadioOptions = ({ legend, steps, cat, changeFn }: Props) => {
  return (
    <fieldset className="flex mb-4">
      <legend className="w-full text-lg text-center border-2 border-blue-700">
        {legend}
      </legend>

      

      <div className={`w-full grid grid-cols-${steps.length} gap-1`}>
        {steps.map((el, idx) => (
          <div
            key={idx}
            className="mr-1 flex flex-col items-center text-center"
          >
            <input
              id={concatenateAndCamelCase(legend, el)}
              type="radio"
              name={concatenateAndCamelCase(legend, "rname")}
              value={idx}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (typeof changeFn === "function") {
                  changeFn(e.target.value, cat);
                }
              }}
              className="mt-2 mb-2"
            />
            <label
              className="w-full text-xs"
              htmlFor={concatenateAndCamelCase(legend, el)}
            >
              {" "}
              {el}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
