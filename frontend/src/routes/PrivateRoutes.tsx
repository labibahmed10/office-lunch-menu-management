import React from "react";

const PrivateRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default PrivateRoutes;
