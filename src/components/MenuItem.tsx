import { FunctionComponent } from "react";

interface IMenuItem {
  item: string;
  options: {
    size: string;
    price: number;
  }[];
}

const MenuItem: FunctionComponent<IMenuItem> = (props: IMenuItem) => (
  <div>
    `${props.item}`
    {props.options.map((option, index) => (
      <div key={`${option.size}-${index}`}>
        `${option.size} - ${option.price}`
      </div>
    ))}
  </div>
);

export default MenuItem;
