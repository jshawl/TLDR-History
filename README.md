# TLDR-History
WDI - Project 3

This single-page app compiles "TL;DR" (too long; didn't read) summaries of historical events - the funnier the better! Users can view events and their summaries added by others, and add their own. A user can also tweet out their favorite summaries and the tweet will mention the twitter handle of the app creators ("@TLDRhistory").

# Group Members
Rachel Porter
Tory Burgett
Dumitru "Dimitri" Gorgan

## Technologies Used
Express, MongoDB/Mongoose, JavaScript/jQuery/AJAX, Bootstrap

## Approach
We found we had common interests in the show "Drunk History," and decided to try to combine the history in your own words concept with microblogging, and created TLDR History.

### User Stories
A user should be able to...
* navigate through all features of the app without any full-page refreshes in order to have a seemless experience
* view a list of historical events and see an image associated with each event
* have the option to create their own, or edit/delete the ones they've created
* select an event and view the TLDR summary or summaries created for it
* create or delete a TLDR for a given event
* use the concept of upvoting to indicate their favorite TLDR and see how popular each TLDR is based on votes from other users
* tweet out their favorite TLDR

## Installation Instructions
```
git clone https://github.com/ddayporter/TLDR-History.git
npm install
node db/seeds.js
```
then run ```nodemon``` to test on localhost:3000.

## Future Features
* Upvoting - We were not able to implement upvoting during the project week so that would be a high priority implementation
* User Authentication - We would like to incorporate user login with Twitter and/or other 3rd party Oauth and then restrict who can edit/delete Events and TLDRs.

## Unsolved Problems
* Jasmine tests - We used the concept of tests to help drive the early development of the app but didn't actually create any functional tests
* Clicking "cancel" on the "create new event" form creates an issue with duplicative posting later
