import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = (props) => {
  const { title, handleCancelClose } = props;
  return (
    <>
      {/* 标题区域 */}
      <Box className="flex justify-between items-center mb-2">
        <Typography variant="subtitle1" className="font-bold">
          {title}
        </Typography>
        <IconButton size="small" onClick={handleCancelClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider className="mb-3" />
    </>
  );
};
export default Header;
