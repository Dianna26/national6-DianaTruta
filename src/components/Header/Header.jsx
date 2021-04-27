import { AppLogo } from "../AppLogo/AppLogo";
import "./Header.css";

import { MenuButton } from "./Menu/MenuButton/MenuButton";
import { MenuFlyout } from "./Menu/MenuFlyout/MenuFlyout";
export function Header() {
  return (
    <div className="app-header">
      <MenuFlyout />
      <MenuButton />
      <AppLogo />
      <p className="app-header__title">To Do App</p>
    </div>
  );
}