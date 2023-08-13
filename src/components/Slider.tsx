import React, { useState } from 'react';

interface SliderProps {
  initialValue?: number;
  step?: number;
  max?: number;
  legend: string;
  stepLabel: string[];
  stepCost: number[];
}

export const Slider: React.FC<SliderProps> = ({ initialValue = 1, max = 5, step = 1, legend, stepLabel, stepCost}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center border-2 border-stone-700 bg-stone-800 mb-4 p-2">
      {legend} (${value > 0 ? stepCost[value - 1]: '0'})
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        className="w-80 h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 mt-2"
      />
      <p className="mt-3">{value > 0 ? stepLabel[value - 1]: '-'}</p>
    </div>
  );
};

