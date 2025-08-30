import type { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useHighlightsControllerGetHighlightsQuery } from "../api/generated-api";
import type { FilterHighlightsDto } from "../api";

const highlightfilter: FilterHighlightsDto = {
  //   homeTeam: "man city",
  //   awayTeam: "man united",
  //   competition: "premier league",
  //   team: "man city",
  //   startDate: "2025-08-10",
  //   endDate: "2025-08-10",
};

export const HighlightGrid: FC = () => {
  const { data: highlights } =
    useHighlightsControllerGetHighlightsQuery(highlightfilter);
  console.log(highlights);
  return (
    <Grid container spacing={2}>
      {highlights?.map((highlight) => (
        <Card
          component="a"
          href={highlight.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            "&:hover": { transform: "scale(1.02)", transition: "0.2s" },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="180"
              image={highlight.thumbnailUrl}
              alt={`${highlight.homeTeam} vs ${highlight.awayTeam}`}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "white",
                fontSize: "0.75rem",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              {highlight.matchDate}
            </Box>
          </Box>
          <CardContent sx={{ padding: "8px !important" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {highlight.homeTeam} vs {highlight.awayTeam}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {highlight.competition}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {highlight.likes} likes • {highlight.uploadDate}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};
