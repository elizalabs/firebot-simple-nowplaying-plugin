import { ReplaceVariable } from "@crowbartools/firebot-types";
import nowPlaying from "../../nowPlaying";

const PROCESS_NAME = 'tidal';

export const tidalNowPlayingVariable: ReplaceVariable = {
  definition: {
    handle: "tidalNowPlaying",
    description: "Gets the current track playing in Tidal",
    usage: "tidalNowPlaying",
    possibleDataOutput: ["text"],
  },
  evaluator: async () => nowPlaying(PROCESS_NAME),
};
