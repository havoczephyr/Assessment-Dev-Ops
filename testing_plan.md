## DevOps Manual Testing Plan

**Initial Use Observation**

Based on initial experience with Dual Duos, Ive noticed a few glaring issues. the scoreboard will not count wins, additionally, despite the game being over, the games interface does not reset for the next match and the player can continuously replay the cards over and over again which means they can potentially stack points if they win (if the scoreboard worked) or losses.

**Manual Testing Plan**

**smoke/sanity**
1) *click* 'See All Bots'
   - generated js errors in terminal, generated 400 errors in browser. **ERROR GETTING BOTS Reference Error: botsArr is not defined**
2) *click* 'Draw'
   - works as intended, drew robot cards out.
3) *click* 'play again'
   - works as intended, reset the screen UI retained scoreboard stats.  
4) *click* DUEL without bots selected.
   - game attempted to play without bots selected, failed 400 errors in browser, terminal errors **'cannot read property health of undefined'**

**Bug Report**

- *Date*: Friday November 19th 2021 
- *Time*: 11:57PM
- *Title*: 'See All Bots' does not work
- **Description** :

Upon browser startup and server startup, attempting to click on 'See all bots' generates a 400 Error in Browser and generates a `ERROR GETTING BOTS` error code in terminal. 