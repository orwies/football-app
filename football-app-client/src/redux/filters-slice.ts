import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterHighlightsDto } from "../api";

const initialState: FilterHighlightsDto = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(
      state,
      action: PayloadAction<{ key: keyof FilterHighlightsDto; value: string }>
    ) {
      state[action.payload.key] = action.payload.value;
    },
    setFilters(state, action: PayloadAction<Partial<FilterHighlightsDto>>) {
      Object.assign(state, action.payload);
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setFilter, setFilters, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
