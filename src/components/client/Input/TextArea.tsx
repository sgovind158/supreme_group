import clsx from "clsx";
import React from "react";

interface StepInputProps {
  touchedName?: boolean;
  errorName?: string;
  placeholder?: string;
  value: string | number;
  disabled?: boolean;
  formik?: {
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  };
  autoFocus?: boolean;
  name: string;
  required?: boolean;
  readOnly?: boolean;
  onValueChange?: ((value: string) => void) | false;
  cssStyle?: string;
}

const TextArea: React.FC<StepInputProps> = (props) => {
  const {
    touchedName,
    errorName,
    placeholder,
    value,
    disabled,
    formik,
    autoFocus,
    name,
    readOnly = false,
    onValueChange = false,
    cssStyle,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik?.handleChange(e);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <div className={clsx("flex flex-col mt-4 ", cssStyle)}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        onBlur={formik ? formik.handleBlur : undefined}
        readOnly={readOnly}
        autoFocus={autoFocus}
        className={clsx(
          "bg-transparent border-b  text-base font-semibold placeholder-white py-4 focus:outline-none",

          touchedName && errorName ? "border-red-500 border-b" : "border-white"
        )}
        rows={2}
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

export default TextArea;
