import { css, cx } from "@emotion/css";
import { IconButton } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";
import React, { CSSProperties, FC } from "react";
import { Transition } from "react-transition-group";

const styles: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
};
const enteringStyles = css`
  max-width: 100%;
`;
const hiddingStyles = css`
  max-width: 0;
`;
const wrapperStyles = css`
  transition: max-width 0.3s 0s linear;
  height: 100%;
  overflow: hidden;
`;
const buttonStyles: CSSProperties = {
  minWidth: "auto",
  transition: "transform 0.1s 0s linear",
};

const stateMap: Record<string, string> = {
  entered: enteringStyles,
  entering: enteringStyles,
  exited: hiddingStyles,
  exiting: hiddingStyles,
};

export const VerticalCollapse: FC = (props) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(true);

  const applyRotation = () => (!collapsed ? 90 : -90);

  return (
    <div style={styles}>
      <div>
        <IconButton
          style={{
            transform: `rotate(${applyRotation()}deg)`,
            ...buttonStyles,
          }}
          onClick={() => setCollapsed(!collapsed)}
        >
          <NavigationIcon />
        </IconButton>
      </div>
      <Transition in={!collapsed} timeout={300}>
        {(state) => (
          <div className={cx(wrapperStyles, stateMap[state])}>
            {props.children}
          </div>
        )}
      </Transition>
    </div>
  );
};
