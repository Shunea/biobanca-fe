import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  halfWidth?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
  registration: Partial<UseFormRegisterReturn>;
};

export const SelectField = (props: SelectFieldProps) => {
  const {
    label,
    options,
    error,
    disabled = false,
    className,
    size = "large",
    halfWidth = false,
    required = false,
    style,
    defaultValue,
    registration,
    placeholder,
  } = props;

  return (
    <FieldWrapper
      className={required ? "required" : ""}
      disabled={disabled}
      label={label}
      error={error}
    >
      <label
        className={`select_label_${
          size === "small" ? "sm" : "lg"
        } ${className}`}
      >
        <select
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="default_select"
          style={{
            background: "#FFFFFF",
            border: "1px solid #A3A3A3",
            borderRadius: "4px",
            color: disabled ? "#A3A3A3" : "#000000",
            fontSize: "16px",
            fontWeight: 400,
            height:
              size === "small" ? "27px" : size === "large" ? "43px" : "30px",
            padding: "10px",
            width: "100%",
            maxWidth: halfWidth ? "80%" : "100%",
            pointerEvents: disabled ? "none" : "auto",
            ...style,
          }}
          {...registration}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map(({ label, value }) => (
            <option key={label?.toString()} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </FieldWrapper>
  );
};
