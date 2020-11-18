---
layout: page
title: FAQ
description: Lacona FAQ
---

## What is Lacona Pro? {#pro}

Lacona Pro unlocks new features, including integrations with great 3rd-party Mac apps. It is available for a small subscription which supports continued Lacona development.

Pro features are enabled automatically with Lacona is used via Setapp.

## Why does Lacona ask for all these permissions?  {#permissions}

In order to search your data and allow you to run commands, Lacona needs permission. Without these permissions, Lacona will still work, but certain features will be automatically disabled.

This data will never leave your computer. For more details, see the [privacy policy](/privacy).

## What is File System Access?  {#files}

Lacona needs permission in order to access your Files. This allows Lacona to [preview](/guide#previews) your file contents, and allows you to [navigate your files](/guide#path-navigation).

When you click the File System Access "Request" button, this will prompt you to select a Folder. By default, your User Folder (`/Users/[your name]`) will be selected. Clicking "Grant Access" will allow Lacona to access everything contained within that folder.

For most users, granting access to the User Folder is sufficient. However, if you want to navigate from the root of the drive, you can instead grant access to the root folder (`/`).

None of your files will never leave your computer. For more details, see the [privacy policy](/privacy).

## I hid the menu bar icon, how can I open the preferences? {#show-preferences}

You can open the Lacona preferences by activating Lacona and pressing ⌘, (that is, hold the command key and press comma). You could also type "open Lacona Preferences" into Lacona itself.

If you forgot the keyboard shortcut to activate Lacona, you can activate it by double-clicking the app itself in Finder, or running `open -a Lacona` in Terminal.

## What are the future plans? {#roadmap}

Here is an unordered Roadmap, which is liable to change. Some features may come by means of Addons due to Mac App Store limitations.

#### Features

- Run system commands (e.g. sleep, restart, start screen saver)
- Search and play Apple Music
- Look up dictionary definitions
- Toggle system preferences (e.g. wifi)
- Search and run applescripts in the Scripts directory
- Run one-off shell scripts in Terminal

#### Integrations

- Get translations from Google Translate
- Search and open GitHub repositories
- Search documentation in Dash
- Search and play Spotify
- Run one-off shell scripts in iTerm2
- Search and create tasks in Todoist

#### Customization

- Addons (using Node.js)
- IFTTT Integration

#### Accessibility & UX

- VoiceOver support
- Keyboard shortcuts for specific commands
- Allow forcing input language

#### Known Issues

- Launch at Login is broken for some Setapp users

## Can you integrate with _\<App/Service\>_?  {#integrations}

If it exposes a good API, maybe! Contact Brandon at [suggestions@lacona.app](mailto:suggestions@lacona.app) and we'll hash it out.

## When will you support _\<Language\>_? {#internationalization}

Because of Lacona's advanced natural language processing, translation is more difficult than most apps. I do want to eventually support non-English languages, but my first priority is making Lacona a premier English experience.

## I was using a Lacona 1 feature that Lacona 2 doesn't have yet {#missing-feature}

While Lacona 2 has many improvements over Lacona 1, there are a few features that haven't yet made the jump. If this is breaking your workflow, you can download Lacona 1 [here](https://download.lacona.io/packages/latest/Lacona.zip). Note that Lacona 1 is no longer being developed or supported, and it may break at any time!

If you were using Lacona 1 via Setapp, [let me know](mailto:brandonhorst@lacona.app?subject=Lacona%202%20is%20missing%20a%20feature) which necessary feature you are missing, I can send you a free Lacona 1 license.
