import MenuItem from "components/MenuItem";
import { ICartItem } from "models/Cart";
import { IMenu } from "models/Menu";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";

interface IMenuProps {
  cart: ICartItem[];
  menu: IMenu[];
  setCart: Dispatch<SetStateAction<ICartItem[]>>;
}

const Menu: FunctionComponent<IMenuProps> = ({ cart, menu, setCart }) => (
  <StyledMenu>
    {menu.map((menuItem, index) => (
      <MenuItem
        key={`${menuItem.item}-${index}`}
        item={menuItem.item}
        options={menuItem.options}
        setCart={setCart}
        cart={cart}
      />
    ))}
  </StyledMenu>
);

const StyledMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Menu;
