import React from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "fill" | "cv" | "cv_closed" | "icon";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  type = "button",
  disabled,
  style,
}) => {
  return (
    <button
      className={`${classes.button} ${classes[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};
export default Button;
