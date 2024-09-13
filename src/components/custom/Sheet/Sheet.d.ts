import { PropsWithChildren, ReactNode } from "react";

export default interface SheetProps extends PropsWithChildren {
  content: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  open?: boolean;
  onChange?: () => void;
}
