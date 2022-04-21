import { ICartItem } from "models/Cart";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";

interface IMenuItem {
  item: string;
  options: {
    size: string;
    price: number;
  }[];
  cart: ICartItem[];
  setCart: Dispatch<SetStateAction<ICartItem[]>>;
}

const MenuItem: FunctionComponent<IMenuItem> = ({
  cart,
  item,
  options,
  setCart,
}) => (
  <StyledMenuItem>
    <ItemText>{item}</ItemText>
    {options.map((option, index) => (
      <ItemButton
        key={`${option.size}-${index}`}
        onClick={() => {
          setCart([
            ...cart,
            { item: item, size: option.size, price: option.price },
          ]);
        }}
      >
        {option.size} - {option.price}
      </ItemButton>
    ))}
  </StyledMenuItem>
);

const StyledMenuItem = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 250px;
  margin: 2rem 0.5rem 0rem 0.5rem;
  width: 250px;
`;

const ItemText = styled.h2``;

const ItemButton = styled.button`
  align-self: center;
  margin-top: 1rem;
  width: 100px;
`;

export default MenuItem;
