import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import { CartContextProvider } from "./core/ImagesContext";
import { MainLayout } from "./layout/MainLayout";
import { ImageList } from "./scenes/ImageList";

export const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path=":kind" element={<ImageList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};
