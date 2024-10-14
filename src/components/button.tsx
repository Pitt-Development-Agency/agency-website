import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="py-2.5 px-4 rounded-xl bg-primary">{children}</button>
  );
}
