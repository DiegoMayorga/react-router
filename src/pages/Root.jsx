import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/* son basicamente los elementos hijos */}
      </main>
    </>
  );
}

export default RootLayout;
