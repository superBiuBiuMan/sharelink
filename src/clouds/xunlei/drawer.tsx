import ShareBaseDrawer from "@/components/Drawer";
import { useState, useImperativeHandle, forwardRef } from "react";
export interface ShareDrawerRef {
  open: () => void;
}
const ShareDrawer = forwardRef<ShareDrawerRef>((props, ref) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpen(true);
      },
    };
  });
  return (
    <ShareBaseDrawer open={open} setOpen={setOpen} title="批量分享">
      你好我是内容
    </ShareBaseDrawer>
  );
});

export default ShareDrawer;
