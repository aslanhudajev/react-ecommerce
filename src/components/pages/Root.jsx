import { Outlet } from "react-router-dom";

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
