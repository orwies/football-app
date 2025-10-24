import type { FC } from "react";
import {
  Grid
} from "@mui/material";
import { useHighlightsControllerGetHighlightsQuery } from "../api/generated-api";
import type { FilterHighlightsDto } from "../api";
import { HighlightThumbnail } from "./higlight-thumbnail";

const highlightfilter: FilterHighlightsDto = {
  //   homeTeam: "man city",
  //   awayTeam: "man united",
  //   competition: "premier league",
  //   team: "man city",
  //   startDate: "2025-08-10",
  //   endDate: "2025-08-10",
};

export const HighlightsList: FC = () => {
  const { data: highlights } =
    useHighlightsControllerGetHighlightsQuery(highlightfilter);
  return (
    <Grid container spacing={5} justifyContent='center'>
      {highlights?.map((highlight) => <HighlightThumbnail key={highlight.id} {...highlight} />)}
    </Grid>
  );
};
