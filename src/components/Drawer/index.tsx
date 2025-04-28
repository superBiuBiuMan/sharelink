import { Drawer, Box, Divider } from "@mui/material";
import { ReactNode, forwardRef } from "react";
import Footer from "./footer";
import Header from "./header";
import type { FooterProps, HeaderProps } from "./types";
export interface BaseDrawerRef {
  open(): void;
}

export interface BaseDrawerProps {
  title?: string; //标题
  open: boolean; //抽屉是否打开
  onClose?: () => void; //关闭抽屉的回调
  width?: number | string; //抽屉宽度，支持数字（像素）或字符串（如 "40vw"）
  className?: string; //自定义类名

  headerProps?: HeaderProps; // 顶部内容
  children?: ReactNode; //抽屉内容
  footerProps?: FooterProps; // 底部内容
  extraButtons?: ReactNode; // 额外按钮
}

/**
 * 基础抽屉组件
 * 提供固定的顶部（标题和关闭按钮）和底部结构
 */
const BaseDrawer = forwardRef<BaseDrawerRef, BaseDrawerProps>((props, ref) => {
  const {
    open,
    onClose,
    width = "50vw",
    children,
    footerProps,
    headerProps,
    className,
    extraButtons,
  } = props;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      className={className}
      slotProps={{
        paper: {
          sx: {
            width: width,
          },
        },
      }}
    >
      <Box className="flex flex-col h-full">
        {/* 固定顶部 */}
        <Header {...(headerProps ? headerProps : ({} as any))} />
        <Divider />

        {/* 可滚动的内容区域 */}
        <Box className="flex-1 overflow-y-auto p-3">{children}</Box>

        {/* 固定底部 */}
        <Footer
          {...(footerProps ? footerProps : ({} as any))}
          extraButtons={extraButtons}
        />
      </Box>
    </Drawer>
  );
});

export default BaseDrawer;
