import { useContext } from "react";
import { ProductContext } from "./App";

export default function ProductPrice() {
  const { price } = useContext(ProductContext);

  return <div>{price}</div>;
}
