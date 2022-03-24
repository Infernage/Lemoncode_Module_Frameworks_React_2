import { css } from "@emotion/css";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { TPictureInfo } from "../core/PictureModel";

const styles = css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  max-height: fit-content;
`;

const imgStyles = css`
  height: 96px;
  width: 96px;
  margin-bottom: 10px;
`;

export type TProps = TPictureInfo & {
  onCheck: (image: TPictureInfo) => void;
};

export const SelectableImage: FC<TProps> = (props) => {
  const { onCheck, ...image } = props;

  const handleChange = () => {
    onCheck(image);
  };

  return (
    <label className={styles}>
      <img className={imgStyles} alt={props.title} src={props.picUrl} />
      <Typography>{props.title}</Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={image.selected}
            onChange={handleChange}
            color="primary"
          />
        }
        label="Buy"
      />
    </label>
  );
};
