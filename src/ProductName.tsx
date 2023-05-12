import { useContext } from "react";
import { ProductContext } from "./App";

export default function ProductName() {
  const { name } = useContext(ProductContext);

  return <div>{name}</div>;
}
