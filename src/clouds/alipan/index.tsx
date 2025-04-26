import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { useRef } from "react";
import ShareDrawer from "./drawer";
import type { ShareDrawerRef } from "./types";

interface Props {}

const Alipan: React.FC<Props> = () => {
  const shareDOM = useRef<ShareDrawerRef>(null);
  const handleClick = () => {
    shareDOM.current?.open();
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          padding: "8px",
          color: "#666",
        }}
      >
        <ShareIcon style={{ fontSize: "20px" }} />
        <span
          style={{
            fontSize: "12px",
            marginTop: "4px",
          }}
        >
          分享
        </span>
      </div>
      <ShareDrawer ref={shareDOM} />
    </>
  );
};

export default Alipan;
