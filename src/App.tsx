import React from "react";
import { CartContextProvider } from "./core/ImagesContext";
import { Cart } from "./scenes/Cart";
import { ImageList } from "./scenes/ImageList";

export const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <CartContextProvider>
        <ImageList />
        <Cart />
      </CartContextProvider>
    </div>
  );
};
