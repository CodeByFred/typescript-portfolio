import React from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "fill" | "transparent";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  type = "button",
}) => {
  return (
    <button
      className={`${classes.button} ${classes[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
