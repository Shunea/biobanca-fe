import React from "react";

const variants = {
  primary: {
    display: "flex",
    alignItems: "center",
    background: "#076AC9",
    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
    color: "#ffffff",
  },
  primary2: {
    background: "#45CEC6",
  },
  secondary: {
    display: "flex",
    alignItems: "center",
    background: "#E7E7E7",
    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
    color: "#656565",
  },
  center: {
    alignSelf: "center",
  },
  end: {
    alignSelf: "end",
    boxShadow: "none",
    marginRight: "65px",
    marginTop: "30px",
    marginBottom: "15px",
  },
  end2: {
    alignSelf: "end",
    boxShadow: "none",
    marginRight: "65px",
    marginTop: "40px",
    marginBottom: "20px",
    padding: "10px 50px",
  },
};

const sizes = {
  small: {
    fontSize: "16px",
    padding: "5px 10px",
  },
  medium: {
    fontSize: "20px",
    padding: "10px 20px",
  },
  large: {
    fontSize: "24px",
    padding: "15px 30px",
  },
  long: {
    fontSize: "20px",
    padding: "15px 60px",
  },
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Array<keyof typeof variants>;
  size?: keyof typeof sizes;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = ["primary"],
      size = "medium",
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        style={variant.reduce((acc: any, curr) => {
          return { ...acc, ...variants[curr] };
        }, sizes[size])}
        {...props}
      >
        {startIcon}
        <span
          style={{
            marginLeft: startIcon ? "5px" : "0",
            marginRight: endIcon ? "5px" : "0",
          }}
        >
          {props.children}
        </span>{" "}
        {endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
