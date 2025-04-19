import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useRef } from "react";
import ShareDrawer, { ShareDrawerRef } from "./drawer";
interface Props {}

const Xunlei: React.FC<Props> = () => {
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

export default Xunlei;
