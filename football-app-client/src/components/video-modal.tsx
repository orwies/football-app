import { Dialog, DialogContent } from "@mui/material";
import { type FC } from "react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string | null;
}

export const VideoModal: FC<VideoModalProps> = ({
  open,
  onClose,
  videoUrl,
}) => {
  if (!videoUrl) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ p: 0 }}>
        <video
          src={`http://localhost:8080/videos/${videoUrl}`}
          controls
          autoPlay
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
        />
      </DialogContent>
    </Dialog>
  );
};
