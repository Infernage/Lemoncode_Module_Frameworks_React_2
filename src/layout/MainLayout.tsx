import { css } from "@emotion/css";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { ImageTypeSelector } from "../pods/ImageTypeSelector";
import { Cart } from "../scenes/Cart";

const styles = css`
  display: flex;
  gap: 50px;
`;

export const MainLayout: FC = () => {
  return (
    <div className={styles}>
      <div>
        <ImageTypeSelector />
        <Outlet />
      </div>
      <Cart />
    </div>
  );
};
