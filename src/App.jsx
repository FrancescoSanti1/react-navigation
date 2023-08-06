import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";

export default function App() {
  return <>
    <div className="container mx-auto grid grid-cols-6 gap-4 my-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path={"/"}>
          <DropdownPage />
        </Route>
        <Route path={"/accordion"}>
          <AccordionPage />
        </Route>
        <Route path={"/button"}>
          <ButtonPage />
        </Route>
        <Route path={"/modal"}>
          <ModalPage />
        </Route>
      </div>
    </div>
  </>
}