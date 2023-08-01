type Props = {
  title: string;
  min?: number;
  max?: number;
  changeFn: any;
  value: number;
  disabled?: boolean;
};

export const FakeNumericInput = ({
  title = "Input",
  min = 1,
  max = 9,
  changeFn,
  value,
}: Props) => {

  const decrement = () => {
    if (value > min) {
      changeFn(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      changeFn(value + 1);
    }
  };

  return (
    <div className="block w-full mt-1">
      <div className="flex h-10 relative mt-1">
        <button
          onClick={decrement}
          title="increase"
          className="flex items-center px-6 lg:px-12 rounded appearance-none"
        >
          <span className="text-xs">&#x25C0;</span>
        </button>
        <p
          className="w-full text-center"
          style={{ backgroundColor: "rgb(59, 59, 59)", lineHeight: "40px" }}
        >
          {title} {value}
        </p>
        <button
          onClick={increment}
          title="decrease"
          className="flex items-center px-6 lg:px-12 rounded appearance-none"
        >
          <span className="text-xs">&#x25B6;</span>
        </button>
      </div>
    </div>
  );
};
