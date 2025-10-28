import type { FC } from "react";
import { HighlightsFilter } from "./highlights-filter";
import { HighlightsList } from "./highlights-list";
import { Box } from "@mui/material";

export const HighlightsScreen: FC = () => {
  return (
    <Box display="flex" justifyContent="space-around" p={4}>
      <Box
        sx={{
          position: "sticky",
          top: 16,
          alignSelf: "flex-start",
          height: "fit-content",
        }}
      >
        <HighlightsFilter />
      </Box>

      <Box flex={1}>
        <HighlightsList />
      </Box>
    </Box>
  );
};
