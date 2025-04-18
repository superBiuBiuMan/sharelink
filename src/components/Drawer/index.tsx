import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
      <div className="flex justify-end items-center gap-4 py-3 px-4">
        <Button
          variant="outlined"
          size="small"
          color="error"
          startIcon={<CancelIcon />}
          onClick={() => setOpen(false)}
          className="hover:bg-red-50"
        >
          取消
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          startIcon={<CheckCircleIcon />}
          className="hover:shadow-md"
        >
          确认
        </Button>
      </div>
    );
  };

  const onClose = (event: React.SyntheticEvent, reason: string) => {
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
            {/* 内容 */}
            <div className="h-0 flex-1 overflow-y-auto">{children}</div>
            {/* 底部 */}
            {footer ? (
              footer
            ) : (
              <>
                <Divider />
                <Footer />
              </>
            )}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default ShareBaseDrawer;
