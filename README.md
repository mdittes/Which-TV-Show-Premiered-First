# Which-TV-Show-Premiered-First
This is an interactive trivia quiz. Users will pick between two listed TV shows and try to pick the show that premiered first. 

# Project Description // How To Play
Our project uses the https://api.tvmaze.com/shows/ API to generate two random TV shows and populates the screen with it. We pulled the data of 'premiered' to compare between two TV shows to determine which one aired first. Once a selection is made by the user, an alert screen informs of the outcome.
We pulled data from the TV maze API because it required no keys and made pulling information from it an easier task.
Our quiz uses multiple events: 
    We opted for using three different event listeners: click, mouseHover and submit.
    Click event for selecting one of the choices 
    Once click event is initiated, the form gets populated with the answer selected
    Once the form is populated with the selected answer, users can press enter 
    Keypress event is on the enter button. Users will press enter and this will initiate the form submit event. 
    Our mouse over event listener allows the user to hover their mouse over both of the listed TV Shows for expanded details of each listed TV show.
Click on one of the two options on screen and press the enter button.
   


# Challenges and Stretch Goals 
The challenges we faced whie building this quiz included issues with the API. Initially we wanted to use the IMDb API but due to restrictions we changed the API to TV maze.
Our stretch goals for this project include, 
    adding a counter to view how many correct/wrong answers the user selected.
    adding multi-player functionality where each player would be given a set amount of attempts and their final tallies would determine the winner.


