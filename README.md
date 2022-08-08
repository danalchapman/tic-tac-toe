# Astrological Tic-Tac-Toe

Dana Chapman || 2207FE || Mod 1 Final Solo Poject

[Turing's Tic-Tac-Toe Specs](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)

Tic-Tac-Toe is the final project for Turing's Mod 1 Front-End Engineering students. With this last project we combine all of the lessons from the first five weeks to create a tangible and interactive web page to showcase the knowledge we've learned, as well as indulging the more creative sides of our minds.

If you're new to the world of Tic-Tac-Toe, do not fear -- you don't need fancy gadgets or gizmos a plenty. The rules for Tic-Tac-Toe are simple and ageless: you and another player (in this case, another friend or rival!) will choose a side, the Sun or the Moon. Your ultimate goal is to win the game by achieving a 3-token line either horizontally, vertically, or diagonally. Your page will display the winner or a draw, and then after a short period of time the board will reset so that you may face off once more. The side bar that corresponds with your chosen token will keep track of your wins, and all you need to play is an open broswer tab! (We recommend Chrome Web Broswer.)

![Short clip of Astrological Tic-Tac-Toe](https://media.giphy.com/media/K5DfzPn36SWGIezkX5/giphy.gif)

## Set-up for your Local Machine

If you have access to this repository (which is currently private at this time), here are the steps to access the web page from your local machine:

1. Clone the repository to your local machine
2. In the local directory, input `open index.html` into your command line

## Technologies Used

1. HTML
2. CSS
3. JavaScript

## Code Architecture 

_player.js_ contains the player class and it's methods where the player instance information is kept: name, token, and winsCount and an `increaseWins` method to increment the player wins.

_game.js_ contains the game class and it's methods that control the data model of the project - turn count/player turn, tracking board data (token placement), checking for win and draw conditions, and reseting the board for a new game. This file updates the data model __only__.

_main.js_ contains all of the DOM-related functions that dictate the behavior that the user sees on the page - like the win counts being updated in the player side bars, the turn counter indicating who is next, the board itself and the tokens placed in their spots, and the winner and draw displays when a game is over. No data model changes happen in this file.

## Future Features

1. Add Dropdown for Different Player Tokens

This is an Astrological-themed Tic-Tac-Toe board, in the future I would love to add new token options for each player. Stars, planets, comets - anything that can be found in the vacuum of space? I would love to bring to the table as an option to represent a player.

2. Reset Button & Clear Wins Button

I would love to add on a manual reset button below the game board that a user could click to reset the game board without finishing a game. Sometimes we misclick, sometimes you just need a do over! Also, a Clear Wins button for a future local-storage extension that would allow the user to clear the local storage, resetting both player wins to a count of 0.

## Challenges & Celebrations

#### Challenges 
My biggest challenge (out of the many) was connecting my data model in `game.js` to the DOM represented in `main.js`. Having to think of both of them separately and then finding the conecting dots was a difficult nut to crack, there were many iterations of the `handleBoardClick` and `renderBoard` functions especially, and even more time spent on the `displayAnnouncement`function when I realized that some of my data model logic was off. A constant back and forth between both files in order to achieve a beautiful and also functioning game.

#### Celebrations
Unsurprising to anyone who knows me, I enjoy getting to flex the creative side of my brain and I had a lot of fun playing with the CSS to design a thematic board. Even before our instructor was done sharing the specs for this project I knew I wanted to incorporate the sun and the moon as the "opposing" players, with some thought on future dropdown additions. An honorable mention is also when I wrote out the `updatePlayerWins` function and it worked on the very first try (after calling it in my `renderBoard` function) was probably the biggest technical __HUZZAH__ of this project, however small a drop that function is in the ocean of this project. It was an amazing feeling all the same.

### Credits

[Player Background Images from unsplash](https://unsplash.com/)

[Player Tokens from FreeSVG](https://freesvg.org/)