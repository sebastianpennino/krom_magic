import * as React from "react";
import { ReactComponent as UsaFlag } from '../assets/us-sp.svg';
import { ReactComponent as ArFlag } from '../assets/ar-sp.svg';

type Props = {
  toggleFn: (v: number) => void
  currentValue: number
}

const FlagButton = ({toggleFn, currentValue}: Props) => {

  const toggleFlag = () => {
    const nextValue = currentValue === 1 ? 0 : 1
    toggleFn(nextValue);
  };

  return (
    <button onClick={toggleFlag} title="Change Language" className="py-0 px-1">
      {currentValue ? <UsaFlag /> : <ArFlag />}
    </button>
  );
};

export default FlagButton;