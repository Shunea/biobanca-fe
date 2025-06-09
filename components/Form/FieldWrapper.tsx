import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
  disabled?: boolean;
  checked?: boolean;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  "className" | "children"
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, style, disabled, className, children } = props;

  return (
    <div>
      <label
        style={{
          display: "block",
          color: disabled ? "#A3A3A3" : "#000000",
          fontSize: "16px",
          fontWeight: 400,
          marginBottom: "5px",
          ...style,
        }}
      >
        <span className={className}>{label}</span>
        <div>{children}</div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
