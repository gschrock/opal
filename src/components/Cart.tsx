import { ICartItem } from "models/Cart";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Cart: FunctionComponent<{ cart: ICartItem[] }> = ({ cart }) => (
  <StyledCart>
    {cart.map((cartItem, index) => (
      <h3 key={`${cartItem.item}-${index}`}>
        {cartItem.size} {cartItem.item} - {cartItem.price}
      </h3>
    ))}
    <CartText>Total: </CartText>
    <OrderButton>Order</OrderButton>
  </StyledCart>
);

const StyledCart = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 250px;
  top: 4rem;
  right: 1.5rem;
  height: 100vh;
`;

const CartText = styled.h2``;

const OrderButton = styled.button``;

export default Cart;
