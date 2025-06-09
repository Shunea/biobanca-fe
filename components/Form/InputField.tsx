import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

const generateInputStyles = (
  disabled?: boolean,
  readOnly?: boolean,
  style?: React.CSSProperties
): React.CSSProperties => ({
  background: disabled ? "#e7e7e7" : "#FFFFFF",
  border: "1px solid #A3A3A3",
  borderRadius: "4px",
  color: readOnly ? "#a3a3a3" : "#000000",
  fontSize: "16px",
  fontWeight: 400,
  height: "43px",
  padding: "10px",
  width: "100%",
  ...style,
});

type InputFieldProps = FieldWrapperPassThroughProps & {
  disabled?: boolean;
  readOnly?: boolean;
  // required?: boolean;
  min?: string | number | undefined;
  max?: string | number | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  step?: string | number | undefined;
  type?:
    | "text"
    | "email"
    | "password"
    | "date"
    | "number"
    | "checkbox"
    | "radio";
  value?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const {
    className,
    disabled,
    readOnly,
    min,
    max,
    maxLength,
    minLength,
    step,
    type = "text",
    value,
    placeholder,
    label,
    checked,
    style,
    registration,
    error,
  } = props;
  
  return (
    <FieldWrapper
      className={className}
      disabled={disabled || readOnly}
      label={label}
      error={error}
    >
      <input
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        // required={required}
        min={min}
        max={
          max
            ? max
            : type === "date"
            ? new Date().toISOString().split("T")[0]
            : undefined
        }
        maxLength={maxLength}
        minLength={minLength}
        step={step}
        type={type}
        value={value}
        placeholder={placeholder}
        style={generateInputStyles(disabled, readOnly, style)}
        {...registration}
      />
    </FieldWrapper>
  );
};
