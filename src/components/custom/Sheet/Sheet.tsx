import React from "react";

import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import SheetProps from "./Sheet.d";

const Sheet = ({
  children,
  content,
  footer,
  title,
  description,
  side = "left",
  open,
  onChange,
}: SheetProps) => {
  return (
    <ShadcnSheet open={open} onOpenChange={onChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      {title && description && (
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
      )}
      <SheetContent side={side}>{content}</SheetContent>
      {footer && <SheetFooter>{footer}</SheetFooter>}
    </ShadcnSheet>
  );
};

export default Sheet;
