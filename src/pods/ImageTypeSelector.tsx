import { Breadcrumbs } from "@material-ui/core";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export const ImageTypeSelector: FC = () => {
  return (
    <Breadcrumbs aria-label="image type selector">
      <Link to="kitties">Kitties</Link>
      <Link to="puppies">Puppies</Link>
    </Breadcrumbs>
  );
};
