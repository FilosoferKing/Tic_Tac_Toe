# Tic Tac Toe

![Twailerz](/img/tic-tac-toe.png)

**Description**: Twailerz is a website that connects the latest tweets via twitter about an upcoming 
movie and connects it with that trailer. It utilizes three different API's; Apple RSS Feeds, YouTube and Twitter. 
The list determining the latest movie trailers is pulled from the Apple RSS Feeds, along with the trailer image and description. The trailer video is pulled from the YouTube API. Then the most current tweets about that 
trailer are pulled from the Twitter API and shown alongside the movie trailer and description.<br>
**Additional Notes**: This project was completed by Team T.A.T, which included myself and two others during a one day hackathon. The only criteria was to use API's of our choice to bring information together.

##Features
* Every click brings you the most current and up-to-date information.
* Shows all relevant information next to eachother.

##Project Notes
  * The first discussion my team had was in determining what we wanted to bring together. We determined 
    that new trailers were always exciting and people are mostly curious what others opinions are of
    that movie. So we decided to bring them together in one place.
  * We worked in a scrum environement, holding many meetings throughout, utilizing stand-ups to communicate progress and         blockers to help determine where we stood and what could be done to improve upon our current position. This method           proved to be very effective and made merging the different aspects of our project seemless.


## Layout
1. Title / Menu
2. Game Area:
	- 3x3 board
	- Dynamically generated
	- 2 player indicators
		- One for each player
		- One highlights to indicate a player's turn

##  v0.5 Requirements
1. Must generate a game board entirely with JS/jQuery
2. Must mark each square alternately
	- X then O, then back to X
	- Squares cannot be re-clicked once set
3. On each player's turn, must indicate the active player on play area

## Wireframe Look

<img src="https://github.com/Learning-Fuze/tic-tac-toe/blob/assets/images/TTT_wireframe.png?raw=true" alt="Tic Tac Toe game board layout image">

## Starting: HTML Version
- Before attempting to create something dynamically with JS, you should make a static HTML version to emulate
- Get the board looking how you would want it to look under normal circumstances
- Then generate the JS to form that HTML with a function. In this case we will call it `initialize_game_board()`

## Methods for changing a cell

- One of the easiest ways to change the cell is to change the element's HTML/Text property
- Store the current player's symbol in a variable
	- Alternate the variables between clicks
	- Track which player's turn it is, and use the current player's symbol
