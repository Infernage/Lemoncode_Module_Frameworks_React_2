import { css } from "@emotion/css";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { ImageTypeSelector } from "../pods/ImageTypeSelector";
import { Cart } from "../scenes/Cart";

const styles = css`
  display: flex;
  gap: 50px;
  height: 100vh;
`;

export const MainLayout: FC = () => {
  return (
    <div className={styles}>
      <div style={{ flex: 1 }}>
        <ImageTypeSelector />
        <Outlet />
      </div>
      <Cart />
    </div>
  );
};
