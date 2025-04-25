import { FileShareStatus } from "@/hooks/useShare/types";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { FC } from "react";

const StatusIcon: FC<{ status: FileShareStatus }> = ({ status }) => {
  switch (status) {
    case "ready":
      return <HourglassEmptyIcon fontSize="small" color="disabled" />;
    case "sharing":
      return <CircularProgress size={16} />;
    case "success":
      return <CheckCircleIcon fontSize="small" color="success" />;
    case "error":
      return <ErrorIcon fontSize="small" color="error" />;
  }
};

export default StatusIcon;
