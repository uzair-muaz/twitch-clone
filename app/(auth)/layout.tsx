import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-full items-center justify-center">
      {children}
    </section>
  );
};

export default AuthLayout;
