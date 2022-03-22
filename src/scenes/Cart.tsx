import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { ImagesContext } from "../core/ImagesContext";
import { CartElement } from "../pods/CartElement";

export const Cart = () => {
  const { images, setImages } = React.useContext(ImagesContext);

  const removeFromCart = (elementId: number) => {
    const image = images.find((image) => image.id === elementId);
    if (image) {
      image.selected = false;
      setImages(images.filter((image) => image.id !== elementId));
    }
  };

  return (
    <div>
      <div>
        <ShoppingCartIcon />
        <span>Cart</span>
      </div>
      <div className="container">
        {images.map((i) => (
          <CartElement
            key={i.id}
            id={i.id}
            selected={i.selected}
            title={i.title}
            picUrl={i.picUrl}
            onRemoved={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};
