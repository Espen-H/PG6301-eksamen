# PG6301-eksamen

Overall Test coverage as of 26/04/19 07:13 is at 37.45%

This is a really underdeveloped social media platform. I went with the same structure that was used in this course as it was familiar, and playing it safe with the timeframe in mind. Most of the time went into the REST api, so the frontend looks about as great as my face right now probably. 

## Instructions how to run
1. yarn install to install dependencies
2. yarn dev to start
3. Open up localhost:8080
4. Create a temp user, or use a test user provided below

## Any special login credentials needed?
Test users:
User: "Foo", Pass: "bar"
User: "Bar, Pass: "foo"

## Extra packages?
Outsides of what was covered in class I only tried to use axios.

## Special scripts?
None outside of what was provided in the assignment.

## Requirements not finished

There is a lot of stuff i didnt manage to finish. Here's a laundry list of unaccomplished goals for this assignment. 

1. A user should be able to post new messages on his/her “timeline”, which should be displayed in
    chronological order together in the same page with the user’s info.

2. Should be possible to search for existing users.

3. Users can send “friendship” requests to other users. This latter will decide whether to accept it or
    not.

4. Two friends can see each other timeline / user-details, but not the ones of the other users they
    are not friend with.

5. The home of a user will be the merged timeline of all of his/her friends, in chronological order,
    updated in real-time (e.g., using WebSockets).

6. Should have a live-chat (using WebSockets) for friends.

7.  When a message contains a URL (e.g., link to an external web page), that should be displayed as
    an actual clickable link. Pay particular attention to the security aspects of having such a
    functionality.
    
    
