import { createContext } from "react";
import Product from "./Product";

const name = "Alex";
const price = 1000000;

type ProductContextProps = {
  name: string;
  price: number;
};

export const ProductContext = createContext<ProductContextProps>({
  name: "",
  price: 0,
});

function App() {
  return (
    <ProductContext.Provider value={{ name, price }}>
      <Product />
    </ProductContext.Provider>
  );
}

export default App;
