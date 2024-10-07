import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <section>
      <div>Only Authenticated Users Can See This</div>;
      <UserButton afterSignOutUrl="/" />
    </section>
  );
};

export default Home;
