# Firebot Simple Now Playing Plugin

A plugin for [Firebot](https://firebot.app) that gets the currently playing track from Tidal or Spotify. It read the player's window title. The player must be running on the same machine that Firebot is on.

> [!IMPORTANT]
> This plugin targets the new plugin API that only works with **Firebot v5.67.0 or newer**. Earlier versions of Firebot are not supported.

> [!NOTE]
> This plugin currently only works on Windows 10/11.

## Usage

### Installation

1. Download the latest [firebot-simple-nowplaying-plugin.js](https://github.com/elizalabs/firebot-simple-nowplaying-plugin/releases/latest/download/firebot-simple-nowplaying-plugin.js) either by clicking that link or navigating to Releases
1. Put it in `%APPDATA%\Firebot\v5\profiles\Main Profile\scripts\`
1. In Firebot, go to Settings -> Plugins & Scripts
1. If you see "Plugins & Scripts are disabled", click the "Enable" button
1. Click "+ Install From File"
1. Select firebot-simple-nowplaying-plugin.js

### Firebot Setups

Included in this repository are 3 Firebot Setups which will add a simple now playing command to your Firebot. All 3 commands have an alias of `!song` as well as the main command.

Save one of these to your computer, then in Firebot go to File -> Firebot Setups -> Import Firebot Setup... and import the `.firebotsetup` file you downloaded.

- [!tidal command.firebotsetup](/firebot-setups/!tidal%20command.firebotsetup?raw): A `!tidal`/`!song` command to get current track playing in Tidal
- [!spotify command.firebotsetup](/firebot-setups/!spotify%20command.firebotsetup?raw): A `!spotify`/`!song` command to get current track playing in Spotify
- [!tidalspotify command.firebotsetup](/firebot-setups/!tidalspotify%20command.firebotsetup?raw): A `!tidalspotify`/`!song` command to get current track playing in Tidal, and if nothing is playing in Tidal, get the current track playing in Spotify. If you'd like to check Spotify first and fall back to Tidal instead, you can use this as a starting point

### Variables

This plugin offers the following variables that can be used in custom commands and elsewhere:

- `$tidalNowPlaying`: Gets the current track playing in Tidal, in the order `title - artist`
- `$spotifyNowPlaying`: Gets the current track playing in Spotify, in the order `artist - title`
  - Podcasts will return the episode title, as formatted in Spotify

These variables return the artist & title in the order given by the player. Since they are separated by a `-` and artist names and track titles can also include a `-`, this plugin does _not_ attempt to fix the order, or give you the option to select your desired order. If you'd like to try reordering artist & title anyway, you can do so with Firebot variables.

### Custom Command

If you're setting up this plugin for the first time, you'll probably want to set up a custom command so that when someone sends, for example, `!song` in your chat, Firebot will respond with the currently playing media.

1. In Firebot, go to Commands
1. Click "New Custom Command"
1. Give your command a name - something like `!song` or `!nowplaying`
1. Scroll down, and click "+ Add Effect"
1. Search for and select the "Chat" effect, and click "Select"
1. Enter a message, for example, if you're using Tidal: `Currently playing: $tidalNowPlaying`
1. Click "Save"
1. Configure your command in any other ways you wish, such as setting an alias or cooldown
1. Click "Save" again to save your command
1. In your Twitch chat or Firebot's Dashboard, test your new command! Make sure you have something playing in the player for the variable you're using

## Development

### Building

```
npm run build
```

The compiled plugin is written to `dist/<pluginOutputName>.js` as a single file.

### Installing development version in Firebot
1. Run `npm run build:dev`. This builds the plugin and automatically copies the `.js` file into Firebot's `scripts/` folder.
1. In Firebot, open the plugin manager, click Install, and select your plugins `.js` file in your `scripts/` folder.

During development you can rerun `npm run build:dev` to have the latest code rebuilt and copied over again.

If Firebot is running, the command will also instruct Firebot to reload the plugin automatically as a form of hot-reload.

### Development Notes

- Keep the plugin definition object (the one with `manifest`, `parametersSchema`, and `onLoad`) in `src/main.ts`. The build minifies output but preserves function names, which Firebot relies on to load the plugin.
- `@crowbartools/firebot-types` is treated as an external dependency and is provided by Firebot at runtime - it is not bundled into your output.
- Edit the `"pluginOutputName"` property in `package.json` to change the filename of the built plugin.
