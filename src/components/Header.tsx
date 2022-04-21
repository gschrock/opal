import Cart from "components/Cart";
import { ICartItem } from "models/Cart";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Header: FunctionComponent<{ cart: ICartItem[] }> = ({ cart }) => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  return (
    <StyledHeader>
      <CartButton onClick={() => setCartVisible(!cartVisible)}>
        View Cart
      </CartButton>
      {cartVisible && <Cart cart={cart} />}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  height: 4rem;
  width: 100%;
`;

const CartButton = styled.button`
  margin-left: auto;
  margin-right: 1.5rem;
`;

export default Header;
