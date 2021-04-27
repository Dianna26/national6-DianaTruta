import menuSvg from "./menu.svg";
import "./MenuButton.css";

export function MenuButton() {
  return <img src={menuSvg} alt="menu-logo" className="menu-logo" />;
}