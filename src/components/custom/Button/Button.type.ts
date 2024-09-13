import { PropsWithChildren } from "react";

import { ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

export interface ButtonProps extends PropsWithChildren, ShadcnButtonProps {
  href?: string;
}
