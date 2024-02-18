import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import App from "../../App";
import Header from "../sections/Header";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
