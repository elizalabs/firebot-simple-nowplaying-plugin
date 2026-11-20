import { ReplaceVariable } from "@crowbartools/firebot-types";
import nowPlaying from "../../nowPlaying";

const PROCESS_NAME = "spotify"

export const spotifyNowPlayingVariable: ReplaceVariable = {
  definition: {
    handle: "spotifyNowPlaying",
    description: "Gets the current track playing in Spotify",
    usage: "spotifyNowPlaying",
    possibleDataOutput: ["text"],
  },
  evaluator: async () => {
    const playing = await nowPlaying(PROCESS_NAME)

    if (playing === "—") {
      return "(Advertisement)"
    }

    return playing
  },
};
