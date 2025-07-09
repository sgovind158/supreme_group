import clsx from "clsx";
import React from "react";

interface StepInputProps {
  touchedName?: boolean;
  errorName?: string;
  type: string;
  placeholder?: string;
  value: string | number;
  disabled?: boolean;
  formik?: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  autoFocus?: boolean;
  name: string;
  required?: boolean;
  readOnly?: boolean;
  onValueChange?: ((value: string) => void) | false;
  cssStyle?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const StepInput: React.FC<StepInputProps> = (props) => {
  const {
    touchedName,
    errorName,
    type,
    placeholder,
    value,
    disabled,
    formik,
    autoFocus,
    name,
    readOnly = false,
    onValueChange = false,
    cssStyle,
    onFocus = undefined,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik?.handleChange(e);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <div className={clsx("flex flex-col mt-4 ", cssStyle)}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        onBlur={formik ? formik.handleBlur : undefined}
        readOnly={readOnly}
        autoFocus={autoFocus}
        className={clsx(
          "bg-transparent border-b  text-base font-semibold placeholder-white py-4 focus:outline-none autofill:outline-none",

          touchedName && errorName ? "border-red-500 border-b" : "border-white"
        )}
        onFocus={onFocus}
      />
      {touchedName && errorName && (
        <span className="text-red-500 text-sm mt-1">{errorName}</span>
      )}
      {!touchedName && !errorName && (
        <span className="text-white text-sm mt-1"> </span>
      )}
    </div>
  );
};

export default StepInput;
