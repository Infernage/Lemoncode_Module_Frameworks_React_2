import { css } from "@emotion/css";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { ImagesContext } from "../core/ImagesContext";
import { TPictureInfo } from "../core/PictureModel";
import { SelectableImage } from "../pods/SelectableImage";

const styles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const ImageList = () => {
  const { setImages, images } = React.useContext(ImagesContext);
  const kind = useParams().kind as string;
  const filteredData = data[kind ?? "kitties"];

  const checkImageInCart = (value: TPictureInfo): boolean =>
    images.some((image) => image.id === value.id);

  const handleCheck = (image: TPictureInfo) => {
    image.selected = !image.selected;
    setImages(
      image.selected
        ? images.concat(image)
        : images.filter((img) => image.id !== img.id)
    );
  };

  return (
    <div className={styles}>
      {filteredData.map((value) => (
        <SelectableImage
          key={value.id}
          selected={checkImageInCart(value)}
          onCheck={handleCheck}
          {...value}
        />
      ))}
    </div>
  );
};
