# s0urce-io-hack
Script to automatically enter the words to hack your opponents on s0urce.io
Randomly discovered the game and although it's a great idea, it doesn't have any "endgame" features and even without a script, it's easy to reach endgame in a few minutes at most, which makes the game a bit boring. And because it's a typing game, I quickly got the idea to write a quick script which automatically enters the words.
It actually isn't as easy, as just copying the displayed text to the input box as the text is displayed as an image. But the image paths are not random so that was easy to bypass, the script just has a map with image path to the word. If a word is unknown, the user will be prompted.

## Usage

Copy the whole script file and paste the contents into the developer console. It should immediately start if you are currently hacking a player, although with a long wait time to type the word and it will ask for each word once.
You also need to copy an up-to-date version of the image->word mappings, which you can find in imageWordMappings.txt. Use the dev console again and enter JSON.parse() and copy the file contents inside the () brackets.

## Keybinds

* Alt+p: Pause and resume the automatic input of words
* Alt+o: Opens a prompt to enter a new delay (in milliseconds) for rechecking if the next word should be entered. Recommended is about 600-1000ms at least, there may be a simple cheat detection if you are too fast.
* Alt+i: Forces the prompt for entering a word to appear again for the current word, if you've mistyped it.
