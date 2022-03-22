import React, { FC } from "react";
import { TPictureInfo } from "./PictureModel";

export type TContext = {
  images: Array<TPictureInfo>;
  setImages: (newValue: Array<TPictureInfo>) => void;
};

const defaultValues: TContext = {
  images: [],
  setImages: (_) => {},
};

export const ImagesContext = React.createContext(defaultValues);

export const CartContextProvider: FC = (props) => {
  const [images, setImages] = React.useState(defaultValues.images);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {props.children}
    </ImagesContext.Provider>
  );
};
