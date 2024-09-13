import React, { PropsWithChildren } from "react";

const ExplainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col gap-4 items-center py-4">
      {children}
    </div>
  );
};

export default ExplainLayout;
