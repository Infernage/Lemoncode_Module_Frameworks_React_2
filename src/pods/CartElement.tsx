import {css} from '@emotion/css';
import {IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import {FC} from 'react';
import {TPictureInfo} from '../core/PictureModel';

const styles = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const imgStyles = css`
  height: 50px;
  width: 50px;
`;

export type TProps = TPictureInfo & {
  onRemoved: (id: number) => void;
}

export const CartElement: FC<TProps> = (props) => {
  return (
    <div className={styles}>
      <img className={imgStyles} src={props.picUrl} alt={props.title} />
      <span>{props.title}</span>
      <IconButton color="primary" aria-label={`remove ${props.title}`} component="span" onClick={() => props.onRemoved(props.id)} >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}