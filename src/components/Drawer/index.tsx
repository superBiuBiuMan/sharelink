import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
interface ShareBaseDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ShareBaseDrawer: React.FC<ShareBaseDrawerProps> = ({
  open,
  setOpen,
  children,
  title,
  footer,
}) => {
  const Footer = () => {
    return (
      <>
        <Divider />
        <div className="flex justify-end">
          <Button size="small">Small</Button>
          <Button>Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </>
    );
  };
  const onClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <>
      <Drawer open={open} onClose={onClose} anchor="right">
        <Box
          sx={{
            width: 500,
            height: "100%",
            padding: 2,
          }}
        >
          <div className="flex flex-col h-full">
            {/* 标题 */}
            <div className="text-2xl font-bold">{title}</div>
            <Divider />
            <div className="h-0 flex-1 overflow-y-auto">{children}</div>
            {/* footer */}
            {footer ? footer : <Footer />}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default ShareBaseDrawer;
