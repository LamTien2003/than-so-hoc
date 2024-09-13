import { Button as ShadcnButton } from "@/components/ui/button";

import { ButtonProps } from "@/components/custom/Button/Button.type";
import Link from "next/link";

const Button = ({ href, children, className }: ButtonProps) => {
  return (
    <ShadcnButton className={className} asChild={!!href}>
      {href ? <Link href={href}>{children}</Link> : children}
    </ShadcnButton>
  );
};

export default Button;
