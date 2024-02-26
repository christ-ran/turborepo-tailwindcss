"use client";

import type { ReactNode, JSX } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps): JSX.Element {
  return <button type="button">{children}</button>;
}
