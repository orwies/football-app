import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setFilter, clearFilters } from "../redux/filters-slice";

export const HighlightsFilter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const handleChange = (key: keyof typeof filters, value: string) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <Box width={250} pr={3}>
      {/* Search by Team */}
      <TextField
        label="Team"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.team ?? ""}
        onChange={(e) => handleChange("team", e.target.value)}
      />

      {/* Competition */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Competition</InputLabel>
        <Select
          value={filters.competition ?? ""}
          onChange={(e) => handleChange("competition", e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="premier-league">Premier League</MenuItem>
          <MenuItem value="la-liga">La Liga</MenuItem>
          <MenuItem value="ucl">Champions League</MenuItem>
        </Select>
      </FormControl>

      {/* Home Team */}
      <TextField
        label="Home Team"
        fullWidth
        margin="normal"
        value={filters.homeTeam ?? ""}
        onChange={(e) => handleChange("homeTeam", e.target.value)}
      />

      {/* Away Team */}
      <TextField
        label="Away Team"
        fullWidth
        margin="normal"
        value={filters.awayTeam ?? ""}
        onChange={(e) => handleChange("awayTeam", e.target.value)}
      />

      {/* Date Range */}
      <TextField
        type="date"
        label="Start Date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={filters.startDate ?? ""}
        onChange={(e) => handleChange("startDate", e.target.value)}
      />

      <TextField
        type="date"
        label="End Date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={filters.endDate ?? ""}
        onChange={(e) => handleChange("endDate", e.target.value)}
      />

      {/* Clear Button */}
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={() => dispatch(clearFilters())}
      >
        Clear All
      </Button>
    </Box>
  );
};
