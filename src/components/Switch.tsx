import React, { useRef, useEffect } from "react";

const cx = (...list: (string | boolean | undefined)[]) =>
  list.filter(Boolean).join(" ");

const getCustomProps = (cssProps: Record<string, any>) =>
  Object.entries(cssProps).reduce(
    (acc, [key, val]) => (key ? { ...acc, [`--${key}`]: val } : acc),
    {}
  );

type Props = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange?: any;
  children?: any; // ReactNode; // React.ReactNode
  tabIndex?: number;
  className?: string;
  textLeft?: string;
  textRight?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  // Other CSS variable props, assuming they are of type `string`
  [key: string]: string | boolean | number | undefined | any;
};

export const Switch = ({
  checked,
  defaultChecked,
  onChange,
  children,
  tabIndex,
  className,
  textLeft,
  textRight,
  disabled,
  indeterminate,
  ...cssVars
}: Props) => {
  const inputRef = useRef<any>();

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label
      className={cx(
        "switch",
        className
      )}
      style={getCustomProps(cssVars)}
    >
      {textLeft && <div className="switch__label__left">{textLeft}</div>}
      <input
        type="checkbox"
        ref={inputRef}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        tabIndex={tabIndex || 0}
        disabled={disabled}
        className="switch__input"
      />
      <div className="switch__gfx"></div>
      {textRight && <div className="switch__label switch__label__right">{textRight}</div>}
    </label>
  );
};
