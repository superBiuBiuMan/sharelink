import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useRef } from "react";
import ShareDrawer from "./drawer";
import type { ShareDrawerRef } from "./types";
interface Props {}

const Uc: React.FC<Props> = () => {
  const shareDOM = useRef<ShareDrawerRef>(null);
  const handleClick = () => {
    shareDOM.current?.open();
  };
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<ShareIcon />}
        onClick={handleClick}
      >
        批量分享
      </Button>
      <ShareDrawer ref={shareDOM} />
    </>
  );
};

export default Uc;
