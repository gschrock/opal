import { mockMenuApi } from "api/MockMenuApi";
import Header from "components/Header";
import Menu from "components/Menu";
import { ICartItem } from "models/Cart";
import { IMenu } from "models/Menu";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

const Landing: FunctionComponent = () => {
  const [menu, setMenu] = useState<IMenu[]>([]);
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      // wouldn't do this normally but short on time
      const apiResponse: any = await mockMenuApi();
      setMenu(apiResponse.menu);
    };
    fetchMenu();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <Main>
        <Menu cart={cart} menu={menu} setCart={setCart} />
      </Main>
    </>
  );
};

const Main = styled.main`
  margin-bottom: 0;
  max-width: 100vw;
  width: 100%;
`;

export default Landing;
