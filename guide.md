---
layout: page
title: Guide
---

## Opening Lacona {#opening}

To open Lacona, you can use the *keyboard shortcut* defined in Lacona Preferences. By default, this keyboard shortcut is ⌥Space (that is, hold down Option/Alt and press the Spacebar).

You can change this keyboard shortcut from the Lacona Preferences.

If you forgot the keyboard shortcut, you can open Lacona by clicking its icon in the Menu Bar.

## Searching {#searching}

To search your data, simply open Lacona and start typing.

Lacona will present you a list of *results* that best match your query. Lacona allows for a degree of fuzziness in the input - you can skip characters in the search query, and Lacona will do its best to understand.

You can use your mouse or the arrow keys to select any result, the right side will display a [*preview*](#previews).

While a result is selected, pressing Return will add it to your [shelf](#shelf), so you can use it in commands. If you want to open the item immediately, you can [press ⌘↩](#shortcuts) (hold Command and press Return).

## Commands {#commands}

Commands tell Lacona to perform actions. These start with a verb and contain one or more objects (e.g. "open Safari" or "search Google for Lacona").

Lacona will show all available commands before you enter any input. This is called the *command list*.

To input a command, you can type out the verb and objects in plain English (e.g. "open Safari"). As you type, Lacona will display the command with *placeholders*, which tell you which type of objects the command can use. Lacona allows for a degree of fuzziness in the input - you can skip characters in the command, and Lacona will do its best to understand.

Alternatively, you can start by typing in the objects (e.g. "Safari"), and pressing Return to add them to the [shelf](#shelf). Then, Lacona will display a list of commands which can use that object. You can then select a command from the list, or begin typing the command.

At any time, you can press Tab, and Lacona will autocomplete your input and allow you to continue typing the command.

When there are no placeholders remaining in a Command, you can Execute the command by pressing Return.

## Previews {#previews}

The right side of the Lacona window displays the *preview pane*, which shows additional details about the selected result.

For many results, the preview shows a list of *attributes*, which are additional data about the result. Some of these attributes have a small "Add to Shelf" button on the right side. Clicking that button will add the attribute to the [shelf](#shelf).

If the command is filled in completely, you will see a *action message* in the bottom right corner. This indicates exactly what Lacona will do when you press Return.

## The Shelf {#shelf}

When you press Return on an object, it will stored on the *shelf*, which appears above the input bar.

Lacona will then display a number of [Commands](#commands) that you can use that object. You can add multiple objects to the shelf, as long as all of the objects can be used in at least one Command.

To empty the shelf, press the Escape key or the small × on the left side.

## Complex Commands {#complex-commands}

Some commands come in simple and more complex forms. For example, "open lacona.app" is a simple command, and "open lacona.app in Safari" is more complex. Both are equally valid commands.

In the [Command List](#commands), these commands are represented with square brackets (e.g. "open URL in \[Application\]").

Once you begin entering a command, the complex forms will be hidden and replaced with the ▶ character. If you see a ▶ at the end of a result, it means that after fully inputting a command, more options will become available.

You can press Tab to fully input a command and see all of the options.

## Incomplete Results {#incompletes}

Sometimes, Lacona detects that you are typing an input that looks like it may turn out to be a certain type of object, but it isn't complete yet.

A good example of this is the query "call +1 342". Lacona can tell that you're typing a phone number, but you're not done yet.

Because of this, Lacona shows an *incomplete result*, to let you know that it understands your input, but it's waiting for you to type more. This will be replaced with a normal result once you finish typing.

## Matches vs Search Results {#matching}

When attempting to understand your input, Lacona has two different approaches, *matching* and *searching*.

Matching happens immediately, so results appear instantly as you type. This makes it very quick to find objects. Matching is used for object types with relatively few options, such as Applications or Search Engines.

Searching happens asyncronously, meaning results appear sometime after you type. This prevents Lacona from feeling slow while it looks through large amounts of data. Searching is used for object types with many options, such as Files or Map Locations. While Lacona is searching for something, you will see a spinning loading indicator at the right side of the input bar.

For some object types, Lacona will default to searching, but you can optionally enable matching in the Preferences. This will make results appear immediately, but could make Lacona feel slower.

This option exists for contacts, calendar events, reminders, notes, music, Things to-dos, and Ulysses sheets.

Consider enabling this if you work with this data often, and you have less than 1,000 (or so) items.

## Path Navigation {#path-navigation}

Instead of searching for files, you can also navigate your file system by Path, similarly to how it is done in Terminal.

To begin navigating files by path, start your input with "\~/" to begin from your User Folder.

You can also navigate files from the root directory ("/"), if you first [Grant Access to the Root Folder](/faq#files) first.

## Shortcuts {#shortcuts}

You can jump to the top 10 results by pressing ⌘1 (for the first result) through ⌘0 (for the 10th result).

You can jump to the bottom of the results list by pressing ⌘↓, or the top by pressing ⌘↑.

In addition to moving through the results list with the arrow keys, you can also use ⌘J to move down and ⌘K to move up.

All of these shortcuts will be displayed on-screen when ⌘ is held.

If you press ⌘↩ when selecting a result, it will perform the *primary action* for that result. Usually, this means opening the result (e.g. launching an app, opening a file, or showing a note). This action will be displayed in the [preview pane](#previews) when ⌘ is held.

## Drag & Drop {#drag-drop}

You can drag files and text onto the Lacona icon (in the Dock, Desktop, or in Finder) to automatically add them to the [shelf](#shelf). You can also drag them onto the Lacona icon in the Menu Bar.

## URLs {#urls}

You can add text to the [shelf](#shelf) programmatically by opening the URL `lacona://x-callback-url/load?text=<your desired text>`.

You can add Files to the [shelf](#shelf) by opening them with Lacona. This can be done from the Terminal with `open -a Lacona <your file>`.

