import { css } from "@emotion/css";
import { Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { VerticalCollapse } from "../common/VerticalCollapse";
import { ImagesContext } from "../core/ImagesContext";
import { CartElement } from "../pods/CartElement";

const styles = css`
  padding-left: 30px;
  border-left: black 2px solid;
  height: 100%;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Cart = () => {
  const { images, setImages } = React.useContext(ImagesContext);

  const removeFromCart = (elementId: number) => {
    const image = images.find((image) => image.id === elementId);
    if (image) {
      image.selected = false;
      setImages(images.filter((image) => image.id !== elementId));
    }
  };

  const clearCart = (): void => {
    setImages([]);
  };

  return (
    <>
      <VerticalCollapse>
        <div className={styles}>
          <div className={headerStyles}>
            <ShoppingCartIcon style={{ height: "50px", width: "50px" }} />
            <Typography variant={"h6"}>Cart</Typography>
          </div>
          <div className={containerStyles}>
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
          <Button
            disabled={!images.length}
            onClick={clearCart}
            variant="contained"
            style={{ whiteSpace: "nowrap" }}
          >
            Clear cart
          </Button>
        </div>
      </VerticalCollapse>
    </>
  );
};
