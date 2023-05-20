import { Children, ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: string;
  color: "primary" | "secondary" | "danger";
  onClick?: () => void;
}
function Button({ children, color, onClick }: Props) {
  const myStyle = {
    backgroundColor: "orange",
  };
  return (
    <div style={myStyle}>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
export default Button;
