import { useState, type FC } from "react";
import { Grid } from "@mui/material";
import { useHighlightsControllerGetHighlightsQuery } from "../api/generated-api";
import { HighlightThumbnail } from "./higlight-thumbnail";
import { useAppSelector } from "../redux/store";
import { VideoModal } from "./video-modal";

export const HighlightsList: FC = () => {
  const filters = useAppSelector((state) => state.filters);
  const { data: highlights } =
    useHighlightsControllerGetHighlightsQuery(filters);
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleOpenVideo = (url: string) => {
    setVideoUrl(url);
    setOpen(true);
  };

  const handleCloseVideo = () => {
    setOpen(false);
    setVideoUrl(null);
  };
  return (
    <>
      <Grid container spacing={5} justifyContent="center">
        {highlights?.map((highlight) => (
          <HighlightThumbnail
            key={highlight.id}
            {...highlight}
            onOpenVideo={handleOpenVideo}
          />
        ))}
      </Grid>
      <VideoModal open={open} onClose={handleCloseVideo} videoUrl={videoUrl} />
    </>
  );
};
