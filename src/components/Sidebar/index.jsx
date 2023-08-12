import { FaTimes } from "react-icons/fa";
import * as C from "./styled";
import SidebarItem from "../SidebarItem";

export function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <C.Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <C.Content>
        <SidebarItem />
      </C.Content>
    </C.Container>
  );
}
