import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material";
import type { FC } from "react";
import type { HighlightDto } from "../api";
import styles from './styles.module.css';

export const HighlightThumbnail: FC<HighlightDto> = ({ url, awayTeam, competition, homeTeam, likes, matchDate, thumbnailUrl, uploadDate }: HighlightDto) => {
  return <Card
    className={styles.abcabc}
    component="a"
    href={url}
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
        height="250"
        image={thumbnailUrl}
        alt={`${homeTeam} vs ${awayTeam}`}
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
        {matchDate}
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
        {homeTeam} vs {awayTeam}
      </Typography>
      <Typography variant="body2" color="text.secondary" noWrap>
        {competition}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {likes} likes • {uploadDate}
      </Typography>
    </CardContent>
  </Card>
}