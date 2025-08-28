import type { FC } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Grid } from '@mui/material';
import { useHighlightsControllerGetHighlightsQuery } from '../api/generated-api';
import type { HighlightDto } from '../api/models/HighlightDto';
import type { FilterHighlightsDto } from '../api';

const highlightfilter: FilterHighlightsDto = {
  homeTeam: "man city",
  awayTeam: "man united",
  competition: "premier league",
  team: "man city",
  startDate: "2025-08-10",
  endDate: "2025-08-10"
}

const highlights: HighlightDto[] = [
  {
    url: "https://example.com/video1.mp4",
    homeTeam: "Liverpool",
    awayTeam: "Manchester City",
    competition: "Premier League",
    matchDate: "2025-08-15",
    id: "2",
    uploadDate: "2025-08-16",
    likes: 950,
    thumbnailUrl: "https://example.com/thumb1.jpg"
  },
  {
    url: "https://example.com/video2.mp4",
    homeTeam: "Arsenal",
    awayTeam: "Tottenham",
    competition: "Premier League",
    matchDate: "2025-08-12",
    id: "3",
    uploadDate: "2025-08-13",
    likes: 750,
    thumbnailUrl: "https://example.com/thumb2.jpg"
  }
];


export const HighlightGrid: FC = () => {
//   const {highlights: HighlightDto} = useHighlightsControllerGetHighlightsQuery( highlightfilter);
  return (
    <Grid container spacing={2}>
      {highlights.map((highlight) => (
        //<Grid item xs={12} sm={6} md={4} lg={3} key={highlight.id}>
          <Card
            component="a"
            href={highlight.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              '&:hover': { transform: 'scale(1.02)', transition: '0.2s' }
            }}
          >
            {/* Thumbnail */}
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="180"
                image={highlight.thumbnailUrl}
                alt={`${highlight.homeTeam} vs ${highlight.awayTeam}`}
              />
              {/* Overlay — could be match date or duration */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  fontSize: '0.75rem',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                {highlight.matchDate}
              </Box>
            </Box>

            {/* Text content */}
            <CardContent sx={{ padding: '8px !important' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
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
//        </Grid>
      ))}
    </Grid>
  );
}