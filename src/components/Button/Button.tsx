import React from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "fill" | "cv" | "cv_closed" | "icon";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  type = "button",
  disabled,
}) => {
  return (
    <button
      className={`${classes.button} ${classes[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
