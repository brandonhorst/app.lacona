---
layout: page
title: Usage Guide
---

### The Basics {#basic}

Using Lacona is straightforward, but here are some tips if you're struggling to get started.

#### Opening Lacona {#opening}

To open Lacona, you can use the Keyboard Shortcut defined in Lacona Preferences. By default, this Keyboard Shortcut is ⌥Space (that is, hold down Option/Alt and press the Spacebar).

You can change this Keyboard Shortcut from the Lacona Preferences.

If you forgot the Keyboard Shortcut, you can open Lacona by clicking its icon in the Menu Bar.

#### Searching {#searching}

To search your data, simply open Lacona and start typing.

Lacona will present you a list of Results that best match your query. Lacona allows for a degree of fuzziness in the input - you can skip characters in the search query, and Lacona will do its best to understand.

Lacona will display a list of Results. You can use your mouse or the arrow keys to select any Result, the right side will display a [Preview](#previews).

While a Result is selected, pressing Return will add it to your [Shelf](#shelf), so you can use it in commands. If you want to open the item immediately, you can [press ⌘↩](#shortcuts) (hold Command and press Return).

#### Commands {#commands}

Commands tell Lacona to perform actions. These start with a verb and contain one or more objects. For example, "open Safari" or "search Google for Lacona".

Lacona will show all available commands before you enter any input. This is called the Command List.

To input a command, you can type out the verb and objects in plain English (e.g. "open Safari"). As you type, Lacona will display the command with Placeholders (displayed as gray rectangles), which tell you which type of objects the command can use. Lacona allows for a degree of fuzziness in the input - you can skip characters in the command, and Lacona will do its best to understand.

Alternatively, you can start by typing in the objects (e.g. "Safari"), and select them to add them to the [Shelf](#shelf). Then, Lacona will display a list of commands which can use that object. You can then select a command from the list, or begin typing the command.

At any time, you can press Tab, and Lacona will autocomplete your input and allow you to continue typing the command.

When there are no placeholders remaining in a Command, you can Execute the command by pressing Return.

#### Previews {#previews}

The right side of the Lacona window displays the Preview Pane, which shows additional details about the selected Result.

For many Results, the preview shows a list of "Attributes", which are additional data about the Result. Some of these Attributes have a small "Add to Shelf" button on the right side. Clicking that button will add the Attribute to the [Shelf](#shelf).

If a Command is a [Complete](#commands), you will see a "Preview Action" in the bottom right corner. This indicates exactly what action Lacona will perform when you press Return.

#### The Shelf {#shelf}

When you select an object, it will be added to the Shelf. Lacona will then display a number of [Commands](#commands) that you can use that object. You can add multiple objects to the Shelf at once, as long as all of the objects can be used in at least one Command.

To empty the Shelf, press the Escape key or the small × on the left side.

#### Complex Commands {#complex-commands}

Some commands come in simple and more complex forms. For example, "open lacona.app" is a simple command, and "open lacona.app in Safari" is more complex. Both are equally valid commands.

In the [Command List](#commands), these commands are represented with `[]` characters (e.g. "open \<URL\> in [\<Application\>]").

Once you begin entering a command, this is represented by the ▶ character. If you see a ▶ at the end of a Result, it means that after fully inputting a Command, more options will become available. You can press Tab to fully input a command and see all of the options.

#### Incomplete Results {#incompletes}

Sometimes, Lacona detects that you are typing an input that looks like it may turn out to be a certain type of object, but it isn't complete yet.

A good example of this is the query "call +1 342". Lacona can tell that you're typing a phone number, but you're not done yet.

Because of this, Lacona shows an "incomplete result", to let you know that it understands your input, but it's waiting for you to type more. This will be replaced with a normal result once you're done typing.

---

### Advanced Features {#avanced}

These features are for the most advanced users - don't worry about these if you're just getting started.

#### Matches vs Search Results {#matching}

When attempting to understand your input, Lacona has two different approaches, Matching and Searching.

Matching happens immediately, so results appear instantly as you type. This makes it very quick to find objects. Matching is used for object types with relatively few options, such as Applications or Search Engines.

Searching happens _asyncronously_, meaning results appear sometime after you type. This prevents Lacona from feeling slow while it looks through large amounts of data. Searching is used for object types with many options, such as Files or Map Locations. While Lacona is searching for something, you will see a loading indicator at the right side of the input bar.

For some object types, Lacona will default to Searching, but you can optionally enable Matching in the Preferences. This will make results appear immediately, but could make Lacona feel slower.

This option exists for contacts, calendar events, reminders, notes, music, Things to-dos, and Ulysses sheets.

Consider enabling this if you work with this data often, and you have less than 1,000 (or so) items.

#### Path Navigation {#path-navigation}

Instead of searching for files, you can also navigate your file system by Path, similarly to how it is done in Terminal.

To begin navigating files by path, start your input `~/` to begin from your User Folder.

If you want to navigate files from the Root Folder (`/`), you need to [Grant Access to the Root Folder](/faq#files) first.


#### Pro Shortcuts {#shortcuts}

You can jump to the top 10 results by pressing ⌘1 (for the first result) through ⌘0 (for the 10th result).

You can jump to the bottom of the results list by pressing ⌘↓, or the top by pressing ⌘↑.

In addition to moving through the results list with the arrow keys, you can also use ⌘J to move down and ⌘K to move up.

All of these shortcuts will be displayed on-screen when ⌘ is held.

If you press ⌘↩ when selecting a result, it will perform the "Default Action" for that result. Usually, this means opening the result (launching an app, opening a file, or showing a note). This action will be displayed in the [Preview Pane](#previews) when ⌘ is held.

#### Drag & Drop {#drag-drop}

You can drag files and text onto the Lacona icon (in the Dock, Desktop, or in Finder) to automatically add them to the [Shelf](#shelf). You can also drag them onto the Lacona icon in the Menu Bar.

#### URLs {#urls}

You can add text to the [Shelf](#shelf) programmatically by opening the URL `lacona://x-callback-url/load?text=<your desired text>`.

You can add Files to the [Shelf](#shelf) by opening them with Lacona. This can be done from the Terminal with `open -a Lacona <your file>`.

