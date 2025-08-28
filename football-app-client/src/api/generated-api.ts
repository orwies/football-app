import { baseApi as api } from "C:\\Users\\User\\coding_or\\code\\football-app\\football-app-client\\src\\api\\base-api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    highlightsControllerGetHighlights: build.query<
      HighlightsControllerGetHighlightsApiResponse,
      HighlightsControllerGetHighlightsApiArg
    >({
      query: (queryArg) => ({
        url: `/highlights`,
        params: {
          homeTeam: queryArg.homeTeam,
          awayTeam: queryArg.awayTeam,
          competition: queryArg.competition,
          team: queryArg.team,
          startDate: queryArg.startDate,
          endDate: queryArg.endDate,
        },
      }),
    }),
    highlightsControllerAddHighlight: build.mutation<
      HighlightsControllerAddHighlightApiResponse,
      HighlightsControllerAddHighlightApiArg
    >({
      query: (queryArg) => ({
        url: `/highlights`,
        method: "POST",
        body: queryArg.createHighlightDto,
      }),
    }),
    highlightsControllerGetHighlightById: build.query<
      HighlightsControllerGetHighlightByIdApiResponse,
      HighlightsControllerGetHighlightByIdApiArg
    >({
      query: (queryArg) => ({ url: `/highlights/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type HighlightsControllerGetHighlightsApiResponse =
  /** status 200 List of highlights */ HighlightDto[];
export type HighlightsControllerGetHighlightsApiArg = {
  homeTeam?: string;
  awayTeam?: string;
  competition?: string;
  team?: string;
  startDate?: string;
  endDate?: string;
};
export type HighlightsControllerAddHighlightApiResponse =
  /** status 201 The highlight has been successfully created. */ HighlightDto;
export type HighlightsControllerAddHighlightApiArg = {
  createHighlightDto: CreateHighlightDto;
};
export type HighlightsControllerGetHighlightByIdApiResponse =
  /** status 200 The highlight */ HighlightDto;
export type HighlightsControllerGetHighlightByIdApiArg = {
  /** Highlight ID */
  id: string;
};
export type HighlightDto = {
  url: string;
  homeTeam: string;
  awayTeam: string;
  competition: string;
  matchDate: string;
  id: string;
  uploadDate: string;
  likes: number;
  thumbnailUrl: string;
};
export type CreateHighlightDto = {
  url: string;
  homeTeam: string;
  awayTeam: string;
  competition: string;
  matchDate: string;
};
export const {
  useHighlightsControllerGetHighlightsQuery,
  useHighlightsControllerAddHighlightMutation,
  useHighlightsControllerGetHighlightByIdQuery,
} = injectedRtkApi;
