import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

interface Props {}

const Xunlei: React.FC<Props> = () => {
  return (
    <Button variant="outlined" startIcon={<ShareIcon />}>
      批量分享
    </Button>
  );
};

export default Xunlei;
