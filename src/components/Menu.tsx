import MenuItem from "components/MenuItem";
import mockMenu from "constants/mockMenu.json";
import { FunctionComponent } from "react";

const Menu: FunctionComponent = () => {
  const menuItems = mockMenu.menu;

  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <MenuItem
          key={`${menuItem.item}-${index}`}
          item={menuItem.item}
          options={menuItem.options}
        />
      ))}
    </div>
  );
};

export default Menu;
