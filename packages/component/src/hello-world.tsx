import React from "react";

export const HelloWorld = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <h1>HelloWorld Component</h1>
      {children}
    </div>
  );
};
